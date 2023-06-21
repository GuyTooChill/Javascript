import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
    const [ title, setTitle ] = useState('')
    const [ price, SetPrice ] = useState('')
    const [ description, setDescription ] = useState('')

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
    }

    return (
        <div>
            <h1>Welcome to the Landing Page! Input your product.</h1>
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
