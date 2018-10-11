import React, { Component } from 'react';






class UsersList extends Component {
    render(){
        return (
            <li className="UsersList">
                My name is: {this.props.user.username}, I am {this.props.user.age} old and I am {this.props.user.nationality}
            </li>
        );
    }    
}


export default UsersList;
