import React from 'react'
import { Link } from 'react-router-dom'
import './navigation.scss'

export const Navigation: React.FC = () => {
   return (
      <header>
         <div className="container navigation">
            <div className="navigation__about">
               <div className="navigation__image"></div>
               <Link className="navigation__title" to="/">
                  Pokemons<br/>
                  Gallery
               </Link>
            </div>
         </div>
      </header>
   )
}