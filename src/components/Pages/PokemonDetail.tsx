import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IState, IPokemonDetail } from '../../interfaces/interfaces'
import { fetchPokemonId } from '../../redux/actions'
import { Spinner } from '../Spinner/Spinner'
import { Error } from '../Error/Error'
import { Link, useHistory } from 'react-router-dom';
import './pokemonDetail.scss'

export const PokemonDetail: React.FC<IPokemonDetail> = ( { id } ) => {
   const dispatch = useDispatch()
   const pokemonsDetail = useSelector( ( state: IState ) => state.pokemonsDetail )
   const pokemonInfo = pokemonsDetail.filter( item => item.id === id )[0]
   const isError = useSelector( ( state: IState ) => state.isError )
   const isLoading = useSelector( ( state: IState ) => state.isLoading )
   const history = useHistory()

   useEffect( () => {
      if (!pokemonInfo) {
         dispatch( fetchPokemonId( id ) )
      }
   }, [] )

   if (isError) return <Error/>
   if (isLoading) return <Spinner/>
   if (!pokemonInfo) {
      return null
   }

   const buttonHandler = () => {
      history.goBack()
   }

   return (
      <div className="container">
         <div className="pokemon-detail">
            <img
               src={ `https://pokeres.bastionbot.org/images/pokemon/${ id }.png` }
               alt={ pokemonInfo.data.name }
               width="150"
               height="150"
               className="pokemon-detail__image"
            />
            <div className="pokemon-detail__info">
               <h2 className="pokemon-detail__info-title">{ pokemonInfo.data.name }</h2>
               <div className="pokemon-detail__info-container">
                  <div className="pokemon-detail__info-card">
                     <h3>Stats:</h3>
                     <ul>
                        { pokemonInfo.data.stats.map( ( stat: any, index: number ) => (
                           <li key={ index }>{ stat.stat.name }</li>
                        ) ) }
                     </ul>
                  </div>
                  <div className="pokemon-detail__info-card">
                     <h3>Abilities:</h3>
                     <ul>
                        { pokemonInfo.data.abilities.map( ( ability: any, index: number ) => {
                           const idRegExp = /([0-9]*)\/$/;
                           let idRegRes = ability.ability.url.match(idRegExp)
                           let idAbility = +idRegRes![1]

                           return (
                              <li key={ index }>
                                 <Link to={ `/ability/${ idAbility }/` } className="pokemon-detail__info-link">
                                    { ability.ability.name }
                                 </Link>
                              </li>
                           )
                        } ) }
                     </ul>
                  </div>
                  <div className="pokemon-detail__info-card">
                     <h3>Types:</h3>
                     <ul>
                        { pokemonInfo.data.types.map( ( type: any, index: number ) => (
                           <li key={ index }>{ type.type.name }</li>
                        ) ) }
                     </ul>
                  </div>
               </div>
               <button className="pokemon-detail__button" onClick={ buttonHandler }>Go back to pokemon gallery</button>
            </div>
         </div>
      </div>
   )
}