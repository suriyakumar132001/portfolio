import "./App.css";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import ProjectsGrid from "./components/Projectsgrid";
import WhatIOffer from "./components/WhatIOffer";
import WorkExperience from "./components/WorkExperience";

 
function App() {
  return (
    <div className="App">
      <Hero/>
      <AboutMe/>
      <ProjectsGrid/>
      <WorkExperience/>
      <WhatIOffer/>
      <ContactMe/>

    </div>
  );
}
 
export default App;