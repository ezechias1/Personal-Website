/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import pod from "./assets/vids/pod.mp4";
import "./info.css";
import book from "./assets/images/book.png"; // Assuming it's a PNG file
import BookVid from "./assets/vids/BookVid.mp4";

function Info() {
  const videoRef1 = useRef(null);

  const [isHovered1, setIsHovered1] = useState(false);

  const handleVideo1Hover = () => {
    setIsHovered1(true);
    videoRef1.current.play(); // Start playing the first video on hover
  };

  const handleVideo1Leave = () => {
    setIsHovered1(false);
    videoRef1.current.pause(); // Pause the first video when hover ends
  };

  return (
    <>
      <h1 className="info" id="About">
        About Me
      </h1>
      <p>
        Hey there, I'm Ezechias Mulamba, born and raised in the sunny vibes of
        Cape Town, South Africa, back in 2004. From early on, I saw how tech was
        shaping our world, and after high school, I decided diving into software
        development was the way to go—it's like mastering the ultimate skill of
        our time, right? When I'm not glued to my screen coding up a storm,
        you'll often find me strumming away on my guitar, lost in music, or
        jotting down poetry that's as random and wild as life itself. Hanging
        out with friends is a big part of my downtime too, whether it's catching
        up at church on Sundays or just chilling during the week. I'm all about
        learning and staying curious—always up for exploring new tech and
        finding fresh ways to solve problems. Collaboration's key for me; I
        thrive on bouncing ideas around and working with diverse perspectives to
        cook up cool stuff.
      </p>
      <br />
      <h1 className="info" id="Projects">
        Projects
      </h1>
      <p>
        <h2>Digital Resume Project.</h2>
        While studying software development, I undertook my first project using
        HTML and CSS. It was an enjoyable experience to learn new skills and
        apply them to build something meaningful. You can check out the project
        here:{" "}
        <a href="https://main--digtal-resume.netlify.app/">Digital Resume</a>
        <br />
        <br />
        <h2>Debugging JavaScript Project</h2>
        The second project involved debugging a JavaScript file for a Book
        Connect app. Initially, I was tasked with fixing issues throughout the
        entire script to get the application functioning correctly. You can view
        the original broken script file{" "}
        <a href="https://github.com/CodeSpace-Academy/book-connect/blob/main/scripts.js">
          here
        </a>
        . <br />
        After debugging and refining the script, I successfully restored the
        functionality of the Book Connect app. You can check out the fixed
        script file{" "}
        <a href="https://github.com/ezechias1/Book-Connect-Project/blob/main/scripts.js">
          here
        </a>
        .
        <br />
        <div className="project-container">
          <div className="project">
            <div className="video-container">
              <video
                ref={videoRef1}
                className={`project-video${isHovered1 ? "zoom-in" : ""}`}
                width="320"
                height="240"
                controls
                loop
                onMouseEnter={handleVideo1Hover}
                onMouseLeave={handleVideo1Leave}
              >
                <source src={BookVid} type="video/mp4" />
              </video>
              <img className="img1" src={book} alt="Book" />
            </div>
          </div>
        </div>
        <br />
        <br />
        <h2>React.js Project</h2>
        For my third and final project at CodeSpace, I developed a Podcast App
        entirely from scratch using React.js. This project involved creating the
        application solely with a provided API and fulfilling 50 user stories.
        It was my first experience with React or any framework, which made it
        both challenging and rewarding.
        <br />
        After completing the development phase, I deployed the app using
        Netlify. You can explore the Podcast App that I built by clicking{" "}
        <a href="https://heretohear.netlify.app/">here</a>.
        <br />
        <br />
        <div className="video-container">
          <video
            className="pod-video"
            width="320"
            height="240"
            controls
            loop
            muted
          >
            <source src={pod} type="video/mp4" />
          </video>{" "}
        </div>
        <br />
        <br />
        I'm constantly building and creating new things as often as possible.
        You can check out all my projects on GitHub by clicking{" "}
        <a href="https://github.com/ezechias1?tab=repositories">here</a>.
      </p>
      <h1 id="Contacts">Contacts</h1>
      <ion-icon name="call-sharp"></ion-icon> (+27)682531230
      <br />
      <br />
      <ion-icon name="archive"></ion-icon> ezechiasmulamba@gmail.com
      <br />
      <br />
      <ion-icon name="logo-github"></ion-icon>{" "}
      <a href="https://github.com/ezechias1?tab=repositories">Github link</a>.
      <br />
      <br />
      <ion-icon name="logo-linkedin"></ion-icon>{" "}
      <a href="https://www.linkedin.com/in/ezechias-mulamba-b12276283/">
        LinkedIn link
      </a>
      .
    </>
  );
}

export default Info;
