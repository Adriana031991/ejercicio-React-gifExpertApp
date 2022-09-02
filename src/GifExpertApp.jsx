import { useState } from 'react'
import { AddCategory, GridShowGifs } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([]) // siempre sera un arreglo


    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
    }

    return (
        <>
            <h1>GifExpertApp</h1>

            {/* input */}
            {/* <AddCategory setCategoryFunction={setCategories}/> */}
            {/* emito evento al hijo: */}
            <AddCategory onAddValue={(event) => onAddCategory(event)} />

            {/* <button onClick={onAddCategory}>Agregar</button> */}

            {categories.map(category => (
                    <GridShowGifs
                        key={category}
                        gridCategory={category} />
                )
            )}

        </>
    )
}
