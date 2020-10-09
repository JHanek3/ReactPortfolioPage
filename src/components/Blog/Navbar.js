import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => (
  <nav>
    <section>
      <Link to="/Blog">Dashboard</Link>
      <Link to="/Blog/posts">Posts</Link>
    </section>
  </nav>
)
