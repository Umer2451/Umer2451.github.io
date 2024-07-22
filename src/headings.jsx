import { useState, useEffect } from "react";
import "./heading.css"
function Heading(){
  const professions = [
    { id: 1, title: "Software Engineer" },
    { id: 2, title: "Frontend Developer" },
    { id: 3, title: "Backend Developer" },
    { id: 4, title: "MERN Stack Developer" },
    { id: 5, title: "React Developer" },
    { id: 6, title: "Kony / Infinity Developer" },
    { id: 7, title: "React Native Developer" },
    { id: 8, title: "Full Stack Developer" },
  ];
  const [currentProfessionIndex, setCurrentProfessionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProfessionIndex(
        (prevIndex) => (prevIndex + 1) % professions.length
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);
    return(
      <div className="myheading">
      <h1>Umer Naeem</h1>
      <p>I'm a {professions[currentProfessionIndex].title}</p>
      <b>Interactive Portfolio</b>
    </div>
    )
}
export default Heading;