import React, { Component } from 'react';
import Social from '../components/Social'
import CourseSourceVid from '../components/CourseSourceVid'



class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <h1 className="name">GEMMA STANDLEY </h1>
            <CourseSourceVid/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home