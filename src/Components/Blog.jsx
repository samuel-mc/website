import React from 'react'
import Posts from './Posts'

const Blog = ({ darkMode }) => {
    return (
        <section className="container" id="contact">
            <h2 className={darkMode ? 'container__title dark' : 'container__title'}> Blog </h2>
            <Posts />
        </section>
    )
}

export default Blog
