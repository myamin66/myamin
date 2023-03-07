import { AppWrap, MotionWrap } from "../wrapper";

const FavTools = ['/react.png', '/node.png', '/mongodb.png', '/express.png', '/python.png'];

const Hero = () => {

  return (
    <div className="app__hero app__flex">

      <div className="p-text">I am</div>
      <div className="head-text">Muhammad Yamin</div>
      <div className="sub-text">MERN Stack Developer / Machine Learning Engineer</div>

      <div className="detail-text">
        <p>I am a <span>Software Engineer</span> specialized in both <span>front-end</span> and <span>back-end</span> development across platforms using JavaScript.</p>
        <br />
        <p>Currently, I am exploring more detailed concepts for full-stack application development and deploying machine learning models.</p>
    
      </div>

      <a className="filled-btn"
        href="mailto:myamin.cs@gmail.com" target="_blank" rel="noreferrer">
        Contact Me
      </a>

      <div className="fav__techs">
        {
          FavTools.map((tool, index) => {
            return (
              <div className="fav__tech" key={index}>
                <img src={tool} alt="tool" />
              </div>
            );
          })
        }
      </div>
    </div>
  );
}

export default AppWrap(MotionWrap(Hero, "home"), "home");
