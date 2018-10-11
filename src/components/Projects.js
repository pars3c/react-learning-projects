import React, { Component } from 'react';
import ProjectItem from './ProjectItem';





class Projects extends Component {
  render(){
    
    let projectItems;
    {/* With the state projects passed to Projects, now I need to iterate each project to render them all */}
    if (this.props.projects){
        {/* projectItems is gonna contain all the iterations done */}
        projectItems = this.props.projects.map(project => {
            return (
                <ProjectItem key={project.title} project={project}/>
            );
        });
    }
    return (
      <div className="Projects">
        <ul>
            {projectItems}
        </ul>
      </div>
    );
  }
}



export default Projects;
