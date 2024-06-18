import "./Banner.css";
function Banner() {
  return (
    <div className="Banner">
      <nav className="About">
        <a href="#About"> About </a>
      </nav>
      <nav className="Projects">
        <a href="#Projects"> Projects </a>
      </nav>

      <nav className="Contacts">
        <a href="#Contacts"> Contacts </a>
      </nav>
    </div>
  );
}
export default Banner;
