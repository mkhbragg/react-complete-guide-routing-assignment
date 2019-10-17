import React, { Component } from 'react';

import './Course.css';

class Course extends Component {
    state = {
        title: null
    };

    componentWillMount() {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
            this.setState({ [param[0]]: param[1] });
        }
    }

    render () {
        return (
            <div className="FullCourse">
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.id}</p>
            </div>
        );
    }
}

export default Course;