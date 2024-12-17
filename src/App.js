import React, { useState, createContext } from 'react'
import Header from './Components/Header'
import ProductCard from './Components/ProductCard'
import ProductDetails from './Components/ProductDetails'
import "./Styles/addItem.css"
import AddItem from './Components/AddItem'
export let ProviderContext = createContext();

export default function App() {
    const [currentItem, setCurrentItem] = useState(0);
    const [numberOfCartItems, setNumberOfCartItems] = useState(0);
    const [showAddItem, setShowAddItem] = useState(false)
    let [data, setData] = useState([
        {
            productImages: [
                "./images/image-product-1.jpg",
                "./images/image-product-2.jpg",
                "./images/image-product-3.jpg",
                "./images/image-product-4.jpg"
            ],
            thumbnailImages: [
                "./images/image-product-1-thumbnail.jpg",
                "./images/image-product-2-thumbnail.jpg",
                "./images/image-product-3-thumbnail.jpg",
                "./images/image-product-4-thumbnail.jpg"
            ],
            productData: {
                productName: "Fall Limited Edition Sneakers",
                productCompany: "sneaker company",
                productDescription: "These low profile sneakers are perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
                actualPrice: 250,
                discount: 50,
            },
            isAddedToCart: false
        },
    ])


    const manageCart = (type, itemNumber) => {

        setData((prevData) => {
            const newData = [...prevData];
            if (type === 'add') {
                newData[itemNumber].isAddedToCart = true
                setNumberOfCartItems(numberOfCartItems + 1)
            }
            else {
                newData[itemNumber].isAddedToCart = false;
                setNumberOfCartItems(numberOfCartItems - 1)
            }
            return newData;
        })
    }

    const goToNext = () => {
        if (currentItem + 1 !== data.length) {
            setCurrentItem(currentItem + 1)
        }
    }
    const goToPrev = () => {
        if (currentItem - 1 >= 0) {
            setCurrentItem(currentItem - 1)
        }
    }
    return (
        <>
            <ProviderContext.Provider value={data}>
                {!showAddItem ? <>
                    <Header cartLength={numberOfCartItems} addItemToggler={setShowAddItem} />
                    <div className="total-product-wrapper">
                        <ProductCard itemNumber={currentItem} />
                        <ProductDetails itemNumber={currentItem} addToCart={manageCart} />
                    </div>
                    <div className="buttons">
                        <button onClick={goToPrev} disabled={currentItem === 0}>Previous</button>
                        <button onClick={goToNext} disabled={currentItem === data.length - 1}>Next</button>
                    </div>
                </>
                    : <AddItem setData={setData} setShowAddItem={setShowAddItem} setCurrentItem={setCurrentItem} length={data.length} />
                }
            </ProviderContext.Provider>
        </>
    )
}

