import React from 'react'
import './search-box.style.css'

// if you don't need internal state nor access to lifecircle methods, you can just use functional components
export const SearchBox = ({placeholder, handleChange }) => (
    <input type="search"
             className="search"
                placeholder={placeholder}
                onChange={handleChange}
   />
)



