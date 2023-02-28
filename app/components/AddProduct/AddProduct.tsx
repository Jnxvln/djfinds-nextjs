'use client'

import styles from './AddProduct.module.scss'
import axios, { AxiosError } from 'axios'
import { FormEvent, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'

export default function AddProduct() {
    const initialState = {
        name: '',
        description: '',
        price: '',
        isPublic: false,
    }
    const [formData, setFormData] = useState(initialState)
    const [isDisabled, setIsDisabled] = useState(false)
    const { name, description, price, isPublic } = formData
    let toastProductId: string

    type TFormData = {
        name: string
        description: string
        price: string
        isPublic: boolean
    }

    // Create product
    const { mutate } = useMutation(
        async (formData: TFormData) =>
            await axios.post('/api/products/addProduct', formData),
        {
            onError: (error) => {
                if (error instanceof AxiosError) {
                    toast.error(error?.response?.data.message, {
                        id: toastProductId,
                    })
                }
                setIsDisabled(false)
            },

            onSuccess: (data) => {
                toast.success('Product added!', { id: toastProductId })
                setFormData(initialState)
                setIsDisabled(false)
            },
        }
    )

    // #region EVENT HANDLERS
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        toastProductId = toast.loading('Creating product...')
        setIsDisabled(true)
        mutate(formData)
    }
    // #endregion

    return (
        <section>
            <form onSubmit={onSubmit} className="bg-gray-200 p-4">
                <h1 className="font-bold text-2xl mb-4">Add Product</h1>

                <div className={styles.table}>
                    {/* Name */}
                    <div className={styles.row}>
                        <div className={styles.cell}>
                            <div>
                                <label>Name: </label>
                            </div>
                        </div>
                        <div className={styles.cell}>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                placeholder="Product name"
                                className="p-2 rounded-md w-full"
                                onChange={onChange}
                            />
                        </div>
                    </div>

                    {/* Price */}
                    <div className={styles.row}>
                        <div className={styles.cell}>
                            <div>
                                <label>Price: </label>
                            </div>
                        </div>
                        <div className={styles.cell}>
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
                        </div>
                    </div>

                    {/* Description */}
                    <div className={styles.row}>
                        <div className={styles.cell}>
                            <div>
                                <label className="mr-6 mb-2">
                                    Description:{' '}
                                </label>
                            </div>
                        </div>
                        <div className={styles.cell}>
                            <textarea
                                name="description"
                                value={description}
                                placeholder="Product description"
                                className="p-2 rounded-md w-full"
                                rows={4}
                                onChange={onTextareaChange}
                            ></textarea>
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={styles.cell}></div>
                        <div className={styles.cell}>
                            <div>
                                <button
                                    type="submit"
                                    disabled={isDisabled}
                                    className="button-primary"
                                >
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    )
}
