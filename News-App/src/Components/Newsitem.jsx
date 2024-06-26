import React from 'react';
import image from '../assets/News.webp';

function Newsitem({ title, description, url, src }) {
    const maxTitleLength = 50;
    const maxDescriptionLength = 100;

    const truncateText = (text, maxLength) => {
        if (text && text.length > maxLength) {
            return text.slice(0, maxLength) + '...';
        }
        return text;
    };

    return (
        <div className="card bg-dark text-light mb-3 mx-2 d-inline-block" style={{ width: '400px' }}>
            <img 
                src={src ? src : image} 
                style={{ height: '200px', width: '100%', objectFit: 'cover' }} 
                className="card-img-top" 
                alt="news" 
            />
            <div className="card-body">
                <h5 className="card-title">{truncateText(title, maxTitleLength)}</h5>
                <p className="card-text">{truncateText(description, maxDescriptionLength)}</p>
                <a href={url} className="btn btn-primary">Read More</a>
            </div>
        </div>
    );
}

export default Newsitem;
