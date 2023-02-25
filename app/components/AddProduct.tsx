'use client'

import { useState } from 'react'

export default function AddProduct() {
    const initialState = {
        name: '',
        description: '',
        price: '',
        isPublic: false,
    }

    const [formData, setFormData] = useState(initialState)

    const { name, description, price, isPublic } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    return (
        <form>
            <div className="bg-gray-300 rounded-xl p-6">
                <h1 className="font-bold text-2xl mb-4">Add Product</h1>
                <table>
                    <tbody>
                        {/* Name */}
                        <tr>
                            <td>
                                <div>
                                    <label className="mr-6">
                                        Product Name:{' '}
                                    </label>
                                </div>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    placeholder="Product name"
                                    className="p-2 rounded-md w-full"
                                    onChange={onChange}
                                />
                            </td>
                        </tr>

                        <br />

                        {/* Price */}
                        <tr>
                            <td>
                                <div>
                                    <label className="mr-6">Price: </label>
                                </div>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    min={0}
                                    step={0.01}
                                    name="price"
                                    value={price}
                                    placeholder="Price"
                                    className="p-2 rounded-md"
                                    onChange={onChange}
                                />
                            </td>
                        </tr>

                        <br />

                        {/* Description */}
                        <tr>
                            <td>
                                <div>
                                    <label className="mr-6 mb-2">
                                        Description:{' '}
                                    </label>
                                </div>
                            </td>
                            <td>
                                <textarea
                                    name="description"
                                    value={description}
                                    placeholder="Enter product description"
                                    className="p-2 rounded-md w-full"
                                    rows={4}
                                    onChange={onChange}
                                ></textarea>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </form>
    )
}
