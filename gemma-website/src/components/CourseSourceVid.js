import React, { Component } from 'react';
import courseSourceRecording from '../vid/courseSourceRec.mov';
import { Link } from 'react-router-dom';

class CourseSourceVid extends Component{
  render(){
    return(
      <a target="_blank" href="https://github.com/gstandley21/course-source"><video className="vid" loop autoPlay type="mov"><source src={courseSourceRecording}/></video></a>
    )
  }
}

export default CourseSourceVid;