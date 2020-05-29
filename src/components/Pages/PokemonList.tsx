import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IPokemonCard, IState } from '../../interfaces/interfaces'
import { fetchPokemon } from '../../redux/actions'
import { PokemonCard } from '../PokemonCard/PokemonCard'
import { Filter } from '../Filter/Filter'
import './pokemonList.scss'
import { Error } from '../Error/Error'
import { Spinner } from '../Spinner/Spinner'

export const PokemonList: React.FC = () => {
   const dispatch = useDispatch()
   const pokemonList = useSelector( ( state: IState ) => state.pokemons )
   const filter = useSelector( ( state: IState ) => state.filter )
   const isError = useSelector( ( state: IState ) => state.isError )
   const isLoading = useSelector( ( state: IState ) => state.isLoading )

   useEffect( () => {
      if(!pokemonList.length) {
         dispatch( fetchPokemon() )
      }
   }, [] )

   if (isError) return <Error/>
   if (isLoading) return <Spinner/>

   const filterHandler = ( item: IPokemonCard ) => {
      if (!filter) return true
      return item.name.includes( filter.toLowerCase() )
   }

   const renderPokemon = pokemonList.filter( filterHandler ).map( ( item: IPokemonCard ) => (
      <PokemonCard name={ item.name } id={ item.id } url={ item.url } key={ item.id }/>
   ) ) || null

   return (
      <section className="container">
         <Filter/>
         <div className="pokemon-list">
            { renderPokemon }
         </div>
      </section>
   )
}
