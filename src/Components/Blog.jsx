import React from 'react'
import Container from './Container'
import Posts from './Posts'

const Blog = ({ darkMode }) =>
    <Container id='blog'>
        <h2 className={darkMode ? 'container__title dark' : 'container__title'}> Blog </h2>
        <Posts />
    </Container>

export default Blog;
