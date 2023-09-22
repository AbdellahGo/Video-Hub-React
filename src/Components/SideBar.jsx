import React from 'react'
import { categories } from '../utils/constants'

const SideBar = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className='side-bar col-12 col-md-3 col-xl-2 mb-2 mb-md-0'>
      <ul className='categories p-2 d-flex flex-row flex-md-column gap-3'>
        {categories.map((category) => (
          <li
            className={`list-unstyled px-3 py-2 rounded-pill ${selectedCategory === category.name && 'active'}`}
            key={category.name}
            onClick={() => setSelectedCategory(category.name)}
            style={{cursor: 'pointer'}}
          >
            <i className={`me-2 ${category.icon}`}></i>
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SideBar