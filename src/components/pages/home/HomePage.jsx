import React from 'react';
import Directory from '../../directory/Directory';
import './Homepage.styles.scss';

const HomePage = (props) => {
    console.log(props);
    return (
        <div className="homepage">
            <Directory />
        </div>
    );
};

export default HomePage;
