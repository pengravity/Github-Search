import React from 'react';
const footerYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className='footer p-5 bg-black text-base text-primary-content footer-center'>
      <p>Created on {footerYear}</p>
    </footer>
  );
}

export default Footer;
