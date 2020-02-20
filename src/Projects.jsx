import React, { Component } from "react";
import ProjectCard from "./ProjectCard";
import { UndrawDashboard } from "react-undraw-illustrations";
import axios from "axios";
class Projects extends Component {
  
  state = {
    projects: [
        {
      "id": 1,
      "name": "My First Website",
      "image": "http://www.4president.us/websites/2000/2000w/gore2000home.gif",
      "description": "This was my first project. The guy lost, but won the popular vote!"
        },
        {
      "id": 2,
      "name": "UI Design",
      "image": "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "description": "Designing user interfaces is fun. I want to learn more about that..."
        },
        {
      "id": 3,
      "name": "Mobile UX",
      "image": "https://images.unsplash.com/photo-1534237886190-ced735ca4b73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
      "description": "I like to design for the mobile platform. The challenges to build UI's for smartphones is challenging but extremely rewarding."
        }
  ]
    
  };

  componentDidMount() {
    axios.get('./src/data/projects.json')
      .then(response => {
        this.setState({
          projects: response.data
        })
      })
  }

  render() {
    const projects = this.state.projects;
    let projectsList;

    if (projects.length > 0) {
      projectsList = projects.map(project => {
        return (
          <div id={'project-' + project.id} key={project.id}>
            <ProjectCard project={project} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
        <div className="ui stackable two column grid">
          <div className="column">
            <UndrawDashboard />
          </div>
          <div className="column">
            <h1 id='projects-header' className="ui header">My stolenProjects</h1>
            <p>
             My name is anish kanswak wjay is your bankw where do you libe and whit do you do for a libing
            </p>
          </div>
        </div>
        <div className="ui stackable four column grid">{projectsList}</div>
      </div>
    );
  }
}

export default Projects;