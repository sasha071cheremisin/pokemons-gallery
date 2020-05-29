import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { PokemonList } from '../Pages/PokemonList';
import { PokemonDetail } from '../Pages/PokemonDetail';
import { Navigation } from '../Navigation/Navigation';
import { Ability } from '../Pages/Ability'

export const App: React.FC = () => {
   return (
      <BrowserRouter>
         <Route component={ Navigation } />
         <Switch>
            <Route exact path="/" component={ PokemonList }/>
            <Route
               path="/pokemon/:id"
               render={ ( { match } ) => {
                  const { id } = match.params;
                  return <PokemonDetail id={ id }/>
               } }
            />
            <Route
               path="/ability/:id"
               render={ ( { match } ) => {
                  const { id } = match.params;
                  return <Ability id={ id }/>
               } }
            />
            <Route render={ () => <div className="container">
               <h2>Page not found!</h2>
            </div> }/>
         </Switch>
      </BrowserRouter>
   )
}
