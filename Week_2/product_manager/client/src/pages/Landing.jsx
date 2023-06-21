import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'

export default function Landing() {
    const [ title, setTitle ] = useState('')
    const [ price, SetPrice ] = useState('')
    const [ description, setDescription ] = useState('')
    const navigate = useNavigate()

    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const changePrice = (e) => {
        SetPrice(e.target.value)
    }

    const changeDescription = (e) => {
        setDescription(e.target.value)
    }

    const submitProduct = (e) => {
        e.preventDefault()
        const productObject = {title, price, description}
        axios.post('http://localhost:8000/api/products/new', productObject)
        navigate('/products/all')
    }

    return (
        <div>
            <h1>Welcome! Input your product.</h1>
            <form onSubmit={submitProduct} >
                <div>
                <label htmlFor='title' >Title</label>
                <input type='text' name='title' value={title} onChange={changeTitle} />
                </div>
                <div>
                <label htmlFor='price' >Price</label>
                <input type='number' name='price' value={price} onChange={changePrice} />
                </div>
                <div>
                <label htmlFor='description' >Description</label>
                <input type='text' name='description' value={description} onChange={changeDescription} />
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )
}
