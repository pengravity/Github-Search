import React from 'react';
import { useState, useContext } from 'react';
import GithubContext from '../../context/GithubContext';

function UserSearch() {
  const [text, setText] = useState('');

  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleChange = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text === '') {
      alert('enter something');
    } else {
      searchUsers(text);

      setText('');
    }
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-300 input input-lg text-black'
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={clearUsers} className='btn btn-ghost btn-lg'>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
