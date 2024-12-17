import React from 'react'

export default function AddItem({ setData, setShowAddItem, setCurrentItem, length }) {


    const convertToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };

    const processFormData = async (form, newData) => {
        for (let [name, value] of form.entries()) {
            if (name === "images") {
                const files = form.getAll(name);
                const base64Images = await Promise.all(
                    files.map((file) => convertToBase64(file))
                );
                newData.productImages = base64Images;
                newData.thumbnailImages = base64Images;
            } else {

                if (name === "actualPrice" || name === "discount") {
                    newData.productData[name] = Number(value) || 0;
                } else {
                    newData.productData[name] = value;
                }
            }
        }
        setData((prevData) => [...prevData, newData]);
        setShowAddItem(false)
        setCurrentItem(length)
    };

    const handleChange = (e) => {

    }

    return (
        <form className="form-wrapper" onSubmit={(e) => {
            e.preventDefault();

            const form = new FormData(e.target);
            const newData = {
                productImages: [],
                thumbnailImages: [],
                productData: {
                    productName: "",
                    productCompany: "",
                    productDescription: "",
                    actualPrice: 0,
                    discount: 0,
                },
                isAddedToCart: false
            };
            if (e.target[0].files.length !== 4) {
                alert("Please select 4 images");
                return;
            }
            processFormData(form, newData);
        }}>
            <h1>Add Your Product to the Site</h1>
            <p>This will not be stored anywhere, and refreshing the page will result in data loss</p>

            <div>
                <label htmlFor="images">Upload 4 Product Images</label><br />
                <input type="file" id='images' accept='image/*' multiple name='images' onChange={handleChange} />
            </div>

            <div>
                <label htmlFor="product-name">Product Name</label><br />
                <input type="text" id='product-name' placeholder='Enter Product Name' required name='productName' />
            </div>
            <div>
                <label htmlFor="company-name">Company Name</label><br />
                <input type="text" id='company-name' placeholder='Enter Company Name' required name='productCompany' />
            </div>

            <div>
                <label htmlFor="product-description">Product Description</label><br />
                <textarea name="" id="product-description" placeholder='Enter Product Description' name="productDescription"></textarea>
            </div>

            <div>
                <label htmlFor="price">$Price</label><br />
                <input type="number" id='price' placeholder='Enter Price' name='actualPrice' />
            </div>

            <div>
                <label htmlFor="discount">Discount(%)</label><br />
                <input type="number" id='discount' placeholder='Enter Discount' required name='discount' />
            </div>

            <button type='submit'>Submit Product</button>
            <p onClick={() => setShowAddItem(false)}>Close</p>

        </form>
    )
}
