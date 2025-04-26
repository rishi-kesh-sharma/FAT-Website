import React from 'react';
import ExampleComponent from '../components/ExampleComponent';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
    return (
        <div className={styles.container}>
            <h1>Welcome to My Next.js Project</h1>
            <p>This is the main landing page of the application.</p>
            <ExampleComponent />
        </div>
    );
};

export default Home;