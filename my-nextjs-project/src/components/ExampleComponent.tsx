import React from 'react';

interface ExampleComponentProps {
    title: string;
    description?: string;
}

const ExampleComponent: React.FC<ExampleComponentProps> = ({ title, description }) => {
    const [count, setCount] = React.useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
            <button onClick={incrementCount}>Count: {count}</button>
        </div>
    );
};

export default ExampleComponent;