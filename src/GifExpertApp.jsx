import { useState } from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([''/*Arcane*/]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
    // setCategories(cat => [...cat, 'Arcane']);
  }

  return (
    <>
      {/* Título */}
      <h1>Gif Search App</h1>

      {/* Input */}
      <AddCategory 
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {/* Listado de GIFs */}
      {
        categories.map((category) => (
            <GifGrid 
              key={category} 
              category={category}
              /* GIF Item */
            />
          ))
      }
    </>
  )
}