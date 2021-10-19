import React from 'react';
import '../styles/Container.css';

const Container = ({ children }) => {
    return (
        <section className="container">
            { children }
        </section>
    )
}

export default Container
