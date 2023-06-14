import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
    const [ word, setWord ] = useState('')
    const [ number, setNumber ] = useState('')
    const [ color1, setColor1 ] = useState('')
    const [ color2, setColor2 ] = useState('')
    const navigate = useNavigate()

    const changeWord = (e) => {
        setWord(e.target.value)
    }

    const submitWord = (e) => {
        e.preventDefault()
        navigate(`hello/` + word)
    }

    const changeNumber = (e) => {
        setNumber(e.target.value)
    }

    const submitNumber = (e) => {
        e.preventDefault()
        navigate(`number/` + number)
    }

    const changeColor1 = (e) => {
        setColor1(e.target.value)
    }
    
    const changeColor2 = (e) => {
        setColor2(e.target.value)
    }

    const submitColors = (e) => {
        e.preventDefault()
        navigate(`color/${word}/${color1}/${color2}`)
    }

    return (
    <div>
        <h1>Welcome</h1>
        <hr/>
        <form onSubmit={submitWord}>
            <div>
                <label htmlFor='word'> What is your word?</label>
                <input type='text' name='word' value={word} onChange={changeWord}/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
        <hr/>
        <form onSubmit={submitNumber}>
        <div>
                <label htmlFor='number'> What is your number?</label>
                <input type='number' name='number' value={number} onChange={changeNumber}/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
        <hr/>
        <form onSubmit={submitColors}>
            <div>
                <label htmlFor='word'> What is your word?</label>
                <input type='text' name='word' value={word} onChange={changeWord}/>
            </div>
            <div>
                <label htmlFor='color1'> What is your text color?</label>
                <input type='text' name='color1' value={color1} onChange={changeColor1} />
            </div>
            <div>
                <label htmlFor='color2'> What is your background color?</label>
                <input type='text' name='color2' value={color2} onChange={changeColor2} />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    </div>
    )
}
