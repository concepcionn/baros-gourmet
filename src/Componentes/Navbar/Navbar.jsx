import React from 'react'
import "./styles.css"
import CartWidget from '../CartWidget/CartWidget'


const Navbar = () => {
  return (
    <div className='navbar-container'>
        <div className="category-title">
        <img alt="B" src={"./public/images/logo-principal.png"} width={"200px"}></img>
            <h1>Baro´s gourmet</h1> 
        </div>
        <div className='category-list'>
            <ul className='list-container'>
                <li>
                    <button className='category-button'>Naturales</button>
                </li>
                <li>
                    <button className='category-button'>Importados</button>
                </li>
                <li>
                    <button className='category-button'>Nacionales</button>
                </li>
            </ul>
        </div>
        <CartWidget/>
    </div>
  )
}

export default Navbar