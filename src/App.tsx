import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";
import { Card } from "./assets/component/Cards/Card";
import { Profile } from "./assets/component/Profile/Profile";

function App() {
  const [fetchedDetails, setFetchedDetails] = useState<any[]>([]);
  const [timeFrames, setTimeFrames] = useState<string>("weekly");
  const timeFramesArr = ["daily", "weekly", "monthly"];

  useEffect(() => {
    fetch("/Time-tracking-dashboard/data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error: ${res.status}`);
        } else {
          return res.json();
        }
      })
      .then((data) => {
        console.log(data);
        setFetchedDetails(data);
      })
      .catch((err) => {
        console.error(`Could not get data: ${err}`);
      });
  }, []);
  return (
    <main>
      <section id='dashboard' className='user-dashboard'>
        <div className='user-info'>
          <Profile />
          <nav className='time-frame'>
            {timeFramesArr.map((option) => (
              <label htmlFor={option} key={option}>
                <input
                  defaultChecked={option === "weekly"}
                  type='radio'
                  name='timeFrames'
                  id={option}
                  value={option}
                  onChange={(event: ChangeEvent<HTMLInputElement>) =>
                    setTimeFrames(event.target.value)
                  }
                />
                {option}
              </label>
            ))}
          </nav>
        </div>
        <div className='user-details'>
          {fetchedDetails.map((details, index) => {
            return (
              <Card
                key={details.title}
                data-animation-offset={index}
                title={details.title}
                current={
                  timeFrames === "daily"
                    ? details.timeframes.daily.current
                    : timeFrames === "monthly"
                    ? details.timeframes.monthly.current
                    : details.timeframes.weekly.current
                }
                previous={
                  timeFrames === "daily"
                    ? details.timeframes.daily.previous
                    : timeFrames === "monthly"
                    ? details.timeframes.monthly.previous
                    : details.timeframes.weekly.previous
                }
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;
