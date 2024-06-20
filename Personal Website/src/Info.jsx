/* eslint-disable react/no-unescaped-entities */

function Info() {
  return (
    <>
      <h1 className="info">About Me</h1>
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
      <h1 className="info">Projects</h1>
      <p>
        While studying software development, I undertook my first project using
        HTML and CSS. It was an enjoyable experience to learn new skills and
        apply them to build something meaningful. You can check out the project
        here:
        <a href="https://main--digtal-resume.netlify.app/"> Digatl Resume</a>
        <br />
        <br />
        The second project involved debugging a JavaScript file for a Book
        Connect app. Initially, I was tasked with fixing issues throughout the
        entire script to get the application functioning correctly. You can view
        the original broken script file
        <a href="https://github.com/CodeSpace-Academy/book-connect/blob/main/scripts.js">
          here.
        </a>
        <br />
        After debugging and refining the script, I successfully restored the
        functionality of the Book Connect app. You can check out the fixed
        script file
        <a href="https://github.com/ezechias1/Book-Connect-Project/blob/main/scripts.js">
          here.
        </a>
        <br />
        <br />
        For my third and final project at CodeSpace, I developed a Podcast App
        entirely from scratch using React.js. This project involved creating the
        application solely with a provided API and fulfilling 50 user stories.
        It was my first experience with React or any framework, which made it
        both challenging and rewarding.
        <br />
        After completing the development phase, I deployed the app using
        Netlify. You can explore the Podcast App that I built by clicking
        <a href="https://heretohear.netlify.app/"> here</a>
        <br />
        <br />
        I'm constantly building and creating new things as often as possible.
        You can check out all my projects on GitHub by clicking{" "}
        <a href="https://github.com/ezechias1?tab=repositories"> here</a>."
      </p>
      <h1>Contacts</h1>
      <ion-icon name="call-sharp"></ion-icon>
      (+27)682531230
      <br />
      <br />
      <ion-icon name="archive"></ion-icon>ezechiasmulamba@gmail.com
      <br />
      <br />
      <ion-icon name="logo-github"></ion-icon>
      <a href="https://github.com/ezechias1?tab=repositories">Github link</a>.
      <br />
      <br />
      <ion-icon name="logo-linkedin"></ion-icon>
      <a href="https://www.linkedin.com/in/ezechias-mulamba-b12276283/">
        LinkedIn link{" "}
      </a>
      .
    </>
  );
}

export default Info;
