import React from 'react'
import { useState } from 'react'

export const AddCategory = ({onAddValue}) => {

    const [inputValue, setInputValue] = useState('')

    const onInputChange = ({target}) => {
        // event.target.value
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if(inputValue.trim().length <=1) {
            return;
        }
        onAddValue(inputValue.trim())
        // setCategoryFunction(categories=>[inputValue, ...categories ])
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                placeholder="search" 
                value = {inputValue}
                onChange={onInputChange}
                />
                {/* // onChange={(event) => onInputChange(event)} es lo mismo que onChange={onInputChange} /> */}
        </form>
    )
}
