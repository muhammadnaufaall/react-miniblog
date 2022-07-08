import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
        <h1>Naufal's Blog</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create" style={{
                color: 'white',
                backgroundColor: '#f1356d',
                borderRadius: '8px',
                padding: '10px 20px'
            }}>New Blog</Link>
        </div>
    </nav>
  )
}

export default Navbar