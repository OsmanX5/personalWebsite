import { useState } from "react";
import About from "./Components/about";
import Projects from "./Components/Projects";
import Experiences from "./Components/Experiences";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const projectsInfo = [
    {
      title: "project1",
      description: "disc1",
    },
    {
      title: "project 2",
      description: " disc 2",
    },
    {
      title: "project 3",
      description: " disc 3",
    },
  ];
  const experincesInfo = [
    {
      jobTitle: "Job1",
      jobTime: "Jan 2020 - Present",
      jobDescription:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide.",
    },
    {
      jobTitle: "Job2",
      jobTime: "Jan - Aug",
      jobDescription: " job desc",
    },
  ];

  return (
    <>
      <About />
      <Projects projectsInfo={projectsInfo} />
      <Experiences experincesInfo={experincesInfo} />
    </>
  );
}

export default App;
