import React from 'react';

const UserProfile = () => {
  return (
    <div className='user-profile'>
      <h1>User Profile</h1>
      <div className='profile-info'>
        <p>
          <strong>Username:</strong> JohnDoe123
        </p>
        <p>
          <strong>Role:</strong> Administrator
        </p>
        <p>
          <strong>Bio:</strong> Loves coding, coffee, and long walks on the
          beach.
        </p>
        <p>
          <strong>Email:</strong> johndoe@example.com
        </p>
      </div>

      <div className='actions'>
        <button>Edit Profile</button>
        <button>Delete Account</button>
      </div>
    </div>
  );
};

export default UserProfile;
