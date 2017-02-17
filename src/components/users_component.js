import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {
  renderUser(user) {
    return (
      <div className = "card card-block">
        <h4 className = "card-title">{ user.name }</h4>
        <p className = "card-text">Something</p>
        <a className = "btn btn-primary">Email</a>
      </div>
    )
  }

  componentWillMount() {
    this.props.fetchUsers();
  }

  render() {
    console.log(this.props);
    return (
      <div className = "user-list">
        { this.props.users.map(this.renderUser) }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, actions)(UserList);
