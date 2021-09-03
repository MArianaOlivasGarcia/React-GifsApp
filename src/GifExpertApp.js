
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Pokemon']);

    return (
        <>
            <h2>GifExpertApp</h2>
            {/* Mandarle algo a mi componente en props */}
            <AddCategory setCategories={ setCategories } />

            <hr/>


            <ol>
                {
                    categories.map( category =>
                        <GifGrid  
                            key = { category }
                            category={ category } 
                        />
                    )
                }
            </ol>
        </>
    );

}