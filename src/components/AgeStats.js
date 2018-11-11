import React, { Component } from 'react';

class AgeStats extends Component {
    timeSince(date) {
        let today = new Date().getTime();
        let other_date = new Date(date).getTime();
        let difference = Math.abs(today - other_date);
        let days = Math.floor(difference / (1000*3600*24))
        return `${days} days`
    }
    render() {

        return (
            <div>
                <h3>{this.props.date}</h3>
                <h4>Congrats you have lived already {this.timeSince(this.props.date)}</h4>
            </div>
        )
    }
}

export default AgeStats;