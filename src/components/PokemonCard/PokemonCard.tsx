import React, { useState } from 'react'
import { IPokemonCard } from '../../interfaces/interfaces'
import { Link } from 'react-router-dom';

import './pokemonCard.scss'

export const PokemonCard: React.FC<IPokemonCard> = ( { name, id } ) => {
   const [hovered, setHovered] = useState(false);
   const toggleMouseEnter = () => {
      setHovered(true)
      setTimeout(() => setHovered(false),300)
   };
   const toggleMouseLeave = () => setTimeout(() => setHovered(false),300);

   return (
      <Link
         to={`/pokemon/${id}/`}
         className="pokemon-card"
         onMouseEnter={toggleMouseEnter}
         onMouseLeave={toggleMouseLeave}
      >
         <div className="pokemon-card__wrapped">
            <img
               className={`pokemon-card__image ${hovered ? 'pokemon-card__image--animated' : ''}`}
               src={ `https://pokeres.bastionbot.org/images/pokemon/${ id }.png` }
               alt={ name }
            />
            <div className="pokemon-card__title">{ name }</div>
         </div>
      </Link>
   )
}