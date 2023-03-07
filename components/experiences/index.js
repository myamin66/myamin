import { BsFillCheckCircleFill } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";

const ExperienceList = [
  {
    title: "Software Developer Intern",
    company: "Idea to Product (I2P)",
    duration: "Aug 2021 - Mar 2022",
    desc: "- Worked as a desktop application developer in a team of 3, using git as version control - Implemented Bulk Barcode Generator Module in I2P's POS using JavaFX, Java, and CSS",
    tags: ["HTML", "CSS", "JavaScript", "Electron.js", "Java", "JavaFX", "MySQL", "Git"],
  },
  {
    title: "Software Engineer Intern",
    company: "Edutrainia",
    duration: "Sep 2022 - Dec 2023",
    desc: "- Tested and evaluated android and web applications for this EdTech startup - Consulted with the development team and led significant improvements, resulting in improved content quality and a faster development process",
    tags: ["HTML", "CSS","Bootstrap","JavaScript", "PHP"],
  }
];

const Experiences = () => {

  return (
    <>
      <h2>Experiences</h2>

      <div className="app__experiences">
        {
          ExperienceList.map((item, index) => (
            <div key={index} className="app__experiences__item">

              <h3 className="app__experiences__item__title">
                {item.title}
              </h3>

              <div className="app__experiences__item__company">
                {item.company}
              </div>

              <div className="app__experiences__item__duration">
                {item.duration}
              </div>

              <div className="app__experiences__item__description">
                {item.desc}
              </div>

              <div className="app__experiences__item__tags">
                {
                  item.tags.map((tag, index) => {
                    return (
                      <div key={index} className="app__experiences__item__tag">
                        <span><BsFillCheckCircleFill /></span>
                        <p className="p-text">{tag}</p>
                      </div>
                    )
                  })
                }
              </div>

            </div>
          ))
        }
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Experiences, "app__skills"), "experiences");
