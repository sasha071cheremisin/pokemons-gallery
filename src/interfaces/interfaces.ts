export interface IState {
   pokemons: any[],
   pokemonsDetail: Array<{[key: string]: any}>,
   pokemonsAbility: Array<{[key: string]: any}>,
   isLoading: boolean,
   isError: boolean,
   filter: string
}

export interface IAblitiy {
   id: number,
}

export interface IPokemonDetail {
   id: number,
   data?: object
}

export interface IAction {
   type: string,
   payload?: any
}

export interface IPokemonCard {
   name: string,
   url: string,
   id: number,
}