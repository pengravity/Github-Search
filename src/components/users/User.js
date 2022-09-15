import React from 'react';
import { Link } from 'react-router-dom';

function User({ user }) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-16 h-16'>
              <img src={user.avatar_url} alt='profile avatar' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='card-title'>{user.login}</h2>
          <Link
            className='text-base-content text-opacity-35'
            to={`/users/${user.login}`}
          >
            View Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default User;
