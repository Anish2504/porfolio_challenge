import React, { Component } from "react";
import axios from "axios";
import CurriculumvitaeCard from "./CurriculumvitaeCard";
import { UndrawUpload } from "react-undraw-illustrations";

class Curriculumvitae extends Component {
  state = {
    curriculumvitae: []
  };
  componentDidMount() {
    axios.get("./src/data/curriculumvitae.json").then(response => {
      this.setState({
        curriculumvitae: response.data
      });
      console.log(response.data);
    });
  }

  render() {
    const curriculumvitae = this.state.curriculumvitae;
    let curriculumvitaeList;

    if (curriculumvitae.length > 0) {
      curriculumvitaeList = curriculumvitae.map(item => {
        return (
          <div id={"curriculumvitae-" + item.id} key={item.id}>
            <CurriculumvitaeCard curriculumvitae={item} />
          </div>
        );
      });
    }

    return (
      <div className="ui main container">
        <div className="ui stackable two column grid">
          <div className="column">
            <UndrawUpload />
          </div>
          <div className="column">
            <h1 className="ui header">Curriculum Vitae</h1>

            <button class="ui inverted blue button">
              <i class="github icon"></i>
              Github
            </button>
            <button class="ui inverted blue button">
              <i class="Resume icon"></i>
              Resume
            </button>
            <button class="ui inverted blue button">
              <i class="linkedin icon"></i>
              LinkedIn
            </button>
          </div>
        </div>
        <div className="ui stackable four column grid">
          {curriculumvitaeList}
        </div>
      </div>
    );
  }
}

export default Curriculumvitae;
