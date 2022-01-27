import React from 'react';
import { useNavigate } from 'react-router-dom';
import './MenuItem.styles.scss';

const MenuItem = ({
    title, imageUrl, size, linkUrl,
}) => {
    const navigate = useNavigate();
    const onKeyPress = (e) => {
        if (e.key === 'Enter') {
            navigate(`${linkUrl}`);
        }
    };
    return (
        <div
            role="button"
            tabIndex={0}
            onClick={() => navigate(linkUrl)}
            onKeyPress={onKeyPress}
            className={`menu-item ${size}`}
        >
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default MenuItem;
