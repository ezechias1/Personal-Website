import Banner from "./Banner";
import Picture from "./assets/images/Picture.jpg";

function Heading() {
  return (
    <>
      <Banner />
      <h1>Hi I am,</h1>
      <div className="name">Ezechias Mulamba</div>
      <h2>and I am a...</h2>
      <h2>Junior</h2>
      <h3>SoftWare Developer</h3>

      {<img className="img" src={Picture} alt="Ezechias" />}
    </>
  );
}
export default Heading;
