import listImg from "../assets/List.png";
import travelImg from "../assets/Travel.png";
import todoImg from "../assets/Todo.png";

import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>

      <ProjectCard
        title="Interactive Sidebar Menu Application"
        image={listImg}
        desc="A React app with a sidebar menu where users can view, add, and filter menu items using input fields and state updates."
        link="https://hbatista415.github.io/React-App-1/"
      />

      <ProjectCard
        title="Travel App"
        image={travelImg}
        desc="A travel app me and group mates developed for a class project."
        link="https://students.gaim.ucf.edu/~ry340220/dig3811/WrldTour/index.html"
      />

      <ProjectCard
        title="Expo Todo List"
        image={todoImg}
        desc="A simple todo list app built with Expo."
        link="https://hbatista415.github.io/todo-app/"
      />
    </div>
  );
}