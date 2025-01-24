import React from 'react';

const Home = () => {
    return (
        <div>
            <header>
                <h1>Welcome to MyProject</h1>
            </header>
            <main>
                <p>
                    Discover a seamless way to manage your videos, collaborate with others, and explore cutting-edge AI features.
                </p>
                <button onClick={() => alert('Explore Features!')}>Explore Now</button>
            </main>
        </div>
    );
};

export default Home;
