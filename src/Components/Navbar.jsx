import React from 'react';


export default function Navbar() {
  return (
    <div className='espace'>
        <h2>F.T.</h2>
        <div>
            <ul className='flex'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <img className="logo" src="./image/logo.avif" alt="" />
    </div>
  )
}
