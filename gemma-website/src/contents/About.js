
import React, { Component } from 'react';
import profilepic from '../img/gemma_photo.PNG';
import {
  Link
} from "react-router-dom";


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <Link to="/"><h1 className="name">GEMMA STANDLEY</h1></Link>
            <h3>Senior at Cornell University | Full Stack Software Engineer</h3>
            <img src={profilepic} className="profilepic"></img> 
            <br></br>
            <p>Gemma Standley is a Senior at Cornell University seeking new grad Software Engineering roles. 
              She is majoring in Computer Science and minoring in Dance and Information Science with a concentration in UX Design.
              Gemma has professional Full Stack Software Engineering experience from internships at Capital One and Pivotal Software, Inc, 
              as well as experience working on a variety of side projects that demonstrate her skills. 
            </p>
            </div>
            )
        }
    }
    
export default About