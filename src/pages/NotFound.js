import React from 'react';
import { GiAbstract046 } from 'react-icons/gi';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className='hero'>
      <div className='text-center hero-content'>
        <div className='max-w-lg'>
          <GiAbstract046 className='mx-24 my-6' size={100} />
          <h2 className='text-4xl mb-3 '>page not found :-(</h2>
          <Link to='/' className='btn -btn-primary btn-lg'>
            <FaHome className='mr-2' />
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
