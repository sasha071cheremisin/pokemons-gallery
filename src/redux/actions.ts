import { Dispatch } from 'redux';
import {
   CHANGE_FILTER,
   FETCH_ABILITY,
   FETCH_ERROR,
   FETCH_POKEMON,
   FETCH_POKEMON_ID,
   FETCH_REQUEST,
   FETCH_SUCCESS
} from './types';
import { IPokemonCard, IPokemonDetail } from '../interfaces/interfaces';

export function changeFilter(text: string) {
   return {
      type: CHANGE_FILTER,
      payload: text
   }
}

export function addPokemonDetail( pokemon: IPokemonDetail ) {
   return {
      type: FETCH_POKEMON_ID,
      payload: pokemon
   }
}

export function addPokemon( pokemons: [] ) {
   return {
      type: FETCH_POKEMON,
      payload: pokemons
   }
}

export function fetchPokemonId(id: number) {
   return async ( dispatch: Dispatch ) => {
      dispatch( {
         type: FETCH_REQUEST,
      } )

      let response, json, result

      try {
         response = await fetch( `https://pokeapi.co/api/v2/pokemon/${id}/` )
         json = await response.json()
         result = {id: id, data: json}
      } catch (e) {
         dispatch( {
            type: FETCH_ERROR,
         } )
      }

      dispatch( {
         type: FETCH_POKEMON_ID,
         payload: result
      } )
      dispatch( {
         type: FETCH_SUCCESS,
      } )
   }
}

export function fetchAbility(id: number) {
   return async ( dispatch: Dispatch ) => {
      dispatch( {
         type: FETCH_REQUEST,
      } )

      let response, json, result

      try {
         response = await fetch( `https://pokeapi.co/api/v2/ability/${id}/` )
         json = await response.json()
         result = {id: id, data: json}
      } catch (e) {
         dispatch( {
            type: FETCH_ERROR,
         } )
      }

      dispatch( {
         type: FETCH_ABILITY,
         payload: result
      } )
      dispatch( {
         type: FETCH_SUCCESS,
      } )
   }
}

export function fetchPokemon() {
   return async ( dispatch: Dispatch ) => {
      dispatch( {
         type: FETCH_REQUEST,
      } )

      let response, json, result

      try {
         response = await fetch( 'https://pokeapi.co/api/v2/pokemon?limit=20' )
         json = await response.json()
         result = json.results.map( ( item: IPokemonCard ) => {
            const idRegExp = /([0-9]*)\/$/;
            let idRegRes = item.url.match(idRegExp)
            item.id = +idRegRes![1]
            return item
         } )
      } catch (e) {
         dispatch( {
            type: FETCH_ERROR,
         } )
      }

      dispatch( {
         type: FETCH_POKEMON,
         payload: result
      } )
      dispatch( {
         type: FETCH_SUCCESS,
      } )
   }
}