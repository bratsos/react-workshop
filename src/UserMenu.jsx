import React from 'react';

const UserMenu = (props) => {
  // Objectives
  //
  // We should provide a Logout button, and call logout function from props when the user clicks on it.
  return (
    <div className="user-menu drop-down">
      <p onClick={() => props.logoutUser()}>Αποσύνδεση</p>
    </div>
  )
}

export default UserMenu