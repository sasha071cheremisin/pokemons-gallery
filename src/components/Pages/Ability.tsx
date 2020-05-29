import React, { useEffect } from 'react'
import { IAblitiy, IState } from '../../interfaces/interfaces'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAbility, fetchPokemon } from '../../redux/actions'
import { Error } from '../Error/Error'
import { Spinner } from '../Spinner/Spinner'
import { useHistory } from "react-router-dom";
import './ability.scss'

export const Ability: React.FC<IAblitiy> = ( { id } ) => {
   const dispatch = useDispatch()
   const abilities = useSelector( ( state: IState ) => state.pokemonsAbility )
   const ability = abilities.filter( item => item.id === id )[0]
   const isError = useSelector( ( state: IState ) => state.isError )
   const isLoading = useSelector( ( state: IState ) => state.isLoading )
   const history = useHistory()

   useEffect( () => {
      if (!ability) {
         dispatch( fetchAbility( id ) )
      }
   }, [] )

   if (isError) return <Error/>
   if (isLoading) return <Spinner/>
   if (!ability) {
      return null
   }

   const buttonHandler = () => {
      history.goBack()
   }

   return (
      <div className="container ability">
         <h2>Ability</h2>
         <h3>Effect:</h3>
         <ul>
            <li><p>{ ability.data.effect_entries[0].effect }</p></li>
         </ul>
         <h3>Short effect:</h3>
         <ul>
            <li><p>{ ability.data.effect_entries[0].short_effect }</p></li>
         </ul>
         <button className="ability__button" onClick={ buttonHandler }>Go back to pokemon</button>
      </div>
   )
}