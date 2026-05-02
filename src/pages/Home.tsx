import headshot from "../assets/headshot.JPG" ;

export default function Home() {
  return (
    <div>
      <h1>Hi, I'm Hailey</h1>
      <p>
        Welcome to my portfolio! I'm a Digital Media student at UCF with a
        passion for content creation in the digital media field. I love
        creating visuals, editing videos, and designing interactive web
        experiences. I have beginner experience with tools like Photoshop,
        Premiere, and HTML, and I'm eager to continue developing my skills to
        create impactful and engaging content.
      </p>
      <img src={Headshot} alt="Profile" width="200" />
    </div>
  );
}