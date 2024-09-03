import avatar from "../../images/image-jeremy.png";
import "./profile.css";

export const Profile = () => {
  return (
    <div className='user-profile'>
      <div className='user_img'>
        <img src={avatar} alt='Avatar of Jeremy Robson' />
      </div>
      <div className='details-container'>
        <span className='user_annotation'>Report for</span>
        <h1 className='user_name'>Jeremy Robson</h1>
      </div>
    </div>
  );
};
