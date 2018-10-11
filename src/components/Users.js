import React, { Component } from 'react';
import UsersList from './UsersList';


class Users extends Component {
  render(){
    let userslist;
    console.log(this.props.users)
    if (this.props.users) {
        userslist = this.props.users.map(user => {
            return (
            <UsersList key={user.username} user={user} />
            );
        });
    }

    return (
        <div className="Users">
            {userslist}
        </div>
      );
    }    
}




export default Users;
