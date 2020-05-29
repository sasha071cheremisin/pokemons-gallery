import {
   CHANGE_FILTER,
   FETCH_ABILITY,
   FETCH_ERROR,
   FETCH_POKEMON,
   FETCH_POKEMON_ID,
   FETCH_REQUEST,
   FETCH_SUCCESS
} from './types';
import { IAction, IState } from '../interfaces/interfaces';

const initialState: IState = {
   pokemons: [],
   pokemonsDetail: [],
   pokemonsAbility: [],
   isLoading: false,
   isError: false,
   filter: ''
}

export const rootReducer = ( state = initialState, action: IAction ) => {
   switch ( action.type ) {
      case FETCH_POKEMON:
         return {
            ...state,
            pokemons: action.payload
         }
      case FETCH_REQUEST:
         return {
            ...state,
            isLoading: true
         }
      case FETCH_SUCCESS:
         return {
            ...state,
            isLoading: false,
            isError: false
         }
      case FETCH_ERROR:
         return {
            ...state,
            isError: true
         }
      case CHANGE_FILTER:
         return {
            ...state,
            filter: action.payload
         }
      case FETCH_POKEMON_ID:
         return {
            ...state,
            pokemonsDetail: [...state.pokemonsDetail , action.payload]
         }
      case FETCH_ABILITY:
         return {
            ...state,
            pokemonsAbility: [...state.pokemonsAbility , action.payload]
         }
      default:
         return state
   }
}