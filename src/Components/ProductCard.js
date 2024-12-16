import React, { useState } from 'react';
import "../Styles/productCard.css";

export default function ProductCard() {
    const [positions, setPositions] = useState([0, 100, 200, 300]);
    const [count, setCount] = useState(1);

    const moveImages = (operation) => {
        if (operation === 'prev' && count > 1) {
            setPositions((prevPositions) =>
                prevPositions.map((pos) => pos + 100)
            );
            setCount((prevCount) => prevCount - 1);
        } else if (operation === 'next' && count < 4) {
            setPositions((prevPositions) =>
                prevPositions.map((pos) => pos - 100)
            );
            setCount((prevCount) => prevCount + 1);
        }
    };

    return (
        <div className="images-outer-wrapper">
            <div className="images-inner-wrapper">
                {/* Navigation Buttons */}
                {count !== 1 && <svg
                    className="prev"
                    width="12"
                    height="20"
                    onClick={() => moveImages('prev')}
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M11 1 3 9l8 8"
                        stroke="#FFF"
                        strokeWidth="5"
                        fill="none"
                        fillRule="evenodd"
                    />
                </svg>}
                {count !== 4 && <svg
                    className="next"
                    onClick={() => moveImages('next')}
                    width="13"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="m2 1 8 8-8 8"
                        stroke="#FFF"
                        strokeWidth="5"
                        fill="none"
                        fillRule="evenodd"
                    />
                </svg>}

                {/* Images */}
                {positions.map((position, index) => (
                    <img
                        key={index}
                        src={`./images/image-product-${index + 1}.jpg`}
                        alt={`product-image-${index + 1}`}
                        className={`img-${index + 1}`}
                        style={{ left: position + '%' }}
                    />
                ))}
            </div>
            {/* Thumbnails */}
            <div className='thumbnails-outer-wrapper'>
                {positions.map((position, index) => (
                    <img
                        key={index}
                        src={`./images/image-product-${index + 1}-thumbnail.jpg`}
                        alt={`product-thumbnail-image-${index + 1}`}
                        className={`thumbnail-${index + 1}`}
                    />
                ))}

            </div>
        </div>
    );
}
