import React from 'react'
import { Link } from 'react-router-dom'
import "../../compCSS/Blog.css"

const DashboardPage = () => (
  <section className="section">
    <h1>Dashboard</h1>
    <p>This is the dashboard.</p>
    <Link to="/projects/Blog/posts" className="button">
      View Posts
    </Link>
  </section>
)

export default DashboardPage
