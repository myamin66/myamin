import { BsFillCheckCircleFill, BsGithub } from 'react-icons/bs';
import { AppWrap, MotionWrap } from "../wrapper";
import Image from 'next/image';

const projects = [
  {
    title: "Pinpoint: A Vehicle Tracking and Reservation System",
    desc: "My final year project at Sukkur IBA University in a team of 3. A vehicle tracking and reservation system using React Native, React.js, and Spring that allows users to track and reserve vehicles with ease. I worked on the mobile application using React Native.",
    coverUrl: "/pinpoint.png",
    githubLink: "https://github.com/Pinpoint-FYP-Project/pinpoint-front-end-mobile",
    demoLink: "https://drive.google.com/file/d/1PEiSLbauxW0rlcsBdvtsSWxx0FsXKErs/view?usp=sharing",
    tags: ["JavaScript", "TypeScript", "React Native", "REST API", "React.js", "Spring", "MySQL", "Git"],
  },
  {
    title: "Edutrainia: An EdTech Startup",
    desc: " A startup that provides online courses and training programs for students and professionals. I worked as a software engineer intern in a team of 10, using git as version control. I worked on the front-end of the website using HTML, CSS, Bootstrap, and JavaScript.",
    coverUrl: "/edutrania.png",
    githubLink: "https://www.edutrainia.com/",
    demoLink: "https://www.edutrainia.com/",
    tags: ["HTML", "CSS", "Bootstrap", "JavaScript", "PHP", "Git"],
  },
  {
    title: "Mess Management System",
    desc: "A mess management system using React.js and Spring Boot that allows users to deal with mess related issues and digitize the manually managed system. I worked on the web application using React.js.",
    coverUrl: "/mess.jpg",
    githubLink: "https://github.com/myamin66/mess-management-system-sibau/",
    demoLink: "https://drive.google.com/file/d/1pRv1ze6ZHL6nudEQSzJSeN2ZgyuU7G9A/view?usp=sharing",
    tags: ["HTML", "CSS", "JavaScript", "React.js", "Spring Boot", "Git"],
  },
  {
    title: "Bulk Barcode Generator",
    desc: "A bulk barcode generator using JavaFX, Java, and CSS that allows users to generate barcodes in bulk. I worked on the desktop application using Java, JavaFX at I2P.",
    coverUrl: "/barcode.jpg",
    githubLink: "https://github.com/myamin66/barcode-generator-javafx",
    demoLink: "https://github.com/myamin66/barcode-generator-javafx",
    tags: ["Java, JavaFX", "CSS", "Git"],
  },
  {
    title: "Post Delivery App",
    desc: "A freelance project for a client. A web application using React.js and Spring Boot that allows users to track their post delivery status. I worked on the web application using React.js.",
    coverUrl: "/crypto-dev.png",
    githubLink: "https://github.com/myamin66/post-delivery-app",
    demoLink: "https://github.com/myamin66/post-delivery-app",
    tags: ["HTML", "CSS", "JavaScript", "React.js", "Spring Boot", "Git"],
  },
  {
    title: "Object Detection and Recognition System",
    desc: "An academic project to first detect wheter the hand is empty or not. If it's not empty then it should tell which object is present inside hand.",
    coverUrl: "/object.jpg",
    githubLink: "https://github.com/myamin66/object-detection-and-recognition",
    demoLink: "https://github.com/myamin66/object-detection-and-recognition/blob/master/Proposal%2C%20Report/021-19-0029_M-Yamin_ML_Project_Report.docx",
    tags: ["Python", "OpenCV", "Flask", "Git"],
  }
];

const Projects = () => {

  return (
    <>
      <h2> My Projects </h2>

      <div className="project__works">
        {
          projects.map((project, index) => {
            return (
              <div key={index} className="project__work">
                <div className="project__work__img">
                  <Image src={project.coverUrl}
                    alt={project.title}
                    layout="fill"
                    priority
                  />
                </div>
                <div className="project__work__details">
                  <h3 className="project__work__title">{project.title}</h3>
                  <p className="project__work__desc">{project.desc}</p>

                  <a className="text-btn" href={project.githubLink} target="_blank" rel="noreferrer">
                    <BsGithub />
                    <span>GitHub repo</span>
                  </a>

                  <div className="project__work__tags">
                    {
                      project.tags.map((tag, index) => {
                        return (
                          <div key={index} className="project__work__tag">
                            <span><BsFillCheckCircleFill /></span>
                            <p className="p-text">{tag}</p>
                          </div>
                        )
                      })
                    }
                  </div>

                  <a className="outlined-btn" href={project.demoLink} target="_blank" rel="noreferrer">
                    Demo
                  </a>

                </div>
              </div>
            )
          })
        }
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Projects, "app__projects"), "projects");
