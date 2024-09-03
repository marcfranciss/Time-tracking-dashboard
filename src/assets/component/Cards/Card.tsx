import "./card.css";

interface Data {
  title?: string;
  current?: string;
  previous?: string;
}
export const Card = ({ title, current, previous }: Data) => {
  return (
    <div className='card-container'>
      <div className='card'>
        <header>
          <span className='header_title'>{title}</span>
          <button>
            <div className='period'></div>
            <div className='period'></div>
            <div className='period'></div>
          </button>
        </header>
        <article>
          <h2 className='card-current'>{current}hrs</h2>
          <h3 className='card-previous'>Last Week - {previous}hrs</h3>
        </article>
      </div>
    </div>
  );
};
