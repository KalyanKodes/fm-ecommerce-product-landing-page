import React, { useEffect, useRef, useState } from 'react';
import "../Styles/productCard.css";

export default function ProductCard() {
    const [positions, setPositions] = useState([0, 100, 200, 300]);
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [count, setCount] = useState(0);
    const imagesWrapper = useRef()

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowSize(window.innerWidth);
        })
    }, []);


    const updateImages = (imageNumber) => {
        let updatedPositions = positions;
        // right traverse
        let counter = 0;
        for (let i = imageNumber; i < updatedPositions.length; i++) {
            updatedPositions[i] = counter * 100;
            counter++;
        }
        counter = 0;
        // left Traversal
        for (let i = imageNumber; i >= 0; i--) {
            updatedPositions[i] = counter * 100;
            counter--;
        }
        setCount(imageNumber)
        setPositions(updatedPositions)
    }
    return (
        <div className="images-outer-wrapper">
            <div className="images-inner-wrapper" ref={imagesWrapper}>

                {windowSize < 800 &&
                    <>
                        {count !== 0 && <svg
                            className="prev"
                            width="12"
                            height="20"
                            onClick={() => updateImages(count - 1)}
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
                        {
                            count !== 3 && <svg
                                className="next"
                                onClick={() => updateImages(count + 1)}
                                width="13"
                                height="20"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m2 1 8 8-8 8"
                                    stroke="#FFF"
                                    strokeWidth="5"
                                    fill="none"
                                    fillRule="evenodd"
                                />
                            </svg>}

                        {positions.map((position, index) => (
                            <img
                                key={index}
                                src={`./images/image-product-${index + 1}.jpg`}
                                alt={`product-image-${index + 1}`}
                                className={`img-${index + 1} slide-images`}
                                style={{ left: position + '%' }}
                            />
                        ))}
                    </>
                }

                {windowSize >= 800 && <img src={`./images/image-product-${count + 1}.jpg`} alt="product-image" className='desktop-image' />}
            </div>
            {/* Thumbnails */}
            <div className='thumbnails-outer-wrapper'>
                {positions.map((position, index) => (
                    <img
                        key={index}
                        src={`./images/image-product-${index + 1}-thumbnail.jpg`}
                        alt={`product-thumbnail-image-${index + 1}`}
                        className={`thumbnail-${index + 1} thumbnail-images`}
                        onClick={() => updateImages(index)}
                        style={count === index ? { opacity: 0.5, border: '1px solid blue' } : {}}
                    />
                ))}

            </div>
        </div>
    );
}
