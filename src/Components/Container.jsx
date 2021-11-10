import React from 'react';
import '../styles/Container.css';

const Container = ({ children, id }) => {
    const element = React.useRef(null);
    const [show, setShow] = React.useState(false);

    React.useEffect(()=>{
        const observer = new window.IntersectionObserver(entries => {
        const { isIntersecting } = entries[0];
        if(isIntersecting) {
            setShow(true);
            observer.disconnect();
        }
        })
        observer.observe(element.current);
    }, [element]);

    return (
        <section id={id} className="container" ref={element}>
            { show && <div className="container__content">
                {children}
            </div>}
        </section>
    )
}

export default Container
