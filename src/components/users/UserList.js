import React from 'react';
import { useEffect, useContext } from 'react';
import User from './User';
import GithubContext from '../../context/GithubContext';

function UserList() {
  const { users, loading, fetchUsers } = useContext(GithubContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {users.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
export default UserList;
