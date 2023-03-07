import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";
import Image from 'next/image';

const About = () => {
  return (
    <>
      <div className="flex__row">

        <div className="profile__img">
          <Image src="/profile-pic.png"
            alt="profile"
            width={1080}
            height={1080}
            layout="intrinsic"
            priority
          />
        </div>

        <div className="spacer" />

        <div className="details">
          <h1 className="head-text">I am Muhammad Yamin</h1>
          <p className="p-text"><span>•</span> Graduated with Bachelor in Computer Science from Sukkur IBA University.</p>
          <p className="p-text"><span>•</span> I have worked on various projects as a MERN Stack Developer as well as a Machine Learning Engineer.</p>
          <p className="p-text"><span>•</span> Strong knowledge and understanding of object-oriented programming, data structures , RESTful APIs, and design patterns.</p> 
          <p className="p-text"><span>•</span> I am a self-motivated and hardworking individual who is always willing to learn new things.</p>
          <p className="p-text"><span>•</span> I am a quick learner and a team player.</p>


          <p className='p-text-head'>My Preferred Tools and Technologies are 👇</p>

          <div className="preferred__skills">
            {
              ["JavaScript", "React, Redux, Node, Express, Next", "Python","NumPy, Pandas, Torch, TF, Sk-Learn","Databases","MongoDB, Firebase, MySQL"].map((item, index) => {
                return (
                  <div key={index} className="profile__skill">
                    <span><BsFillCheckCircleFill /></span>
                    <p className="p-text">{item}</p>
                  </div>
                )
              })
            }
          </div>

          <a className="outlined-btn"
            href='https://github.com/myamin66' target="_blank" rel="noreferrer"
          >
            Visit My GitHub
          </a>

        </div>

      </div>
    </>
  );
};

export default AppWrap(MotionWrap(About, "app__about"), "about");
