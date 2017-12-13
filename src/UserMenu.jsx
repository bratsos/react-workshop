import React from 'react';

const UserMenu = (props) => {
  return (
    <div className="user-menu drop-down">
      <p onClick={() => props.logoutUser()}>Αποσύνδεση</p>
    </div>
  )
}

export default UserMenu