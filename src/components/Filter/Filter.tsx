import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeFilter } from '../../redux/actions'
import { IState } from '../../interfaces/interfaces'
import './filter.scss'

export const Filter: React.FC = () => {
   const filter = useSelector( ( state: IState ) => state.filter )
   const dispatch = useDispatch()

   const submitHandler = ( e: React.FormEvent<HTMLFormElement> ) => {
      e.preventDefault()
   }

   const changeInputFilter = ( e: React.ChangeEvent<HTMLInputElement> ) => {
      dispatch( changeFilter( e.target.value ) )
   }

   return (
      <form onSubmit={ submitHandler } className="filter">
         <input
            className="filter__input"
            id="inputFilter"
            type="text"
            onChange={ changeInputFilter }
            value={ filter }
         />
         <label
            className="filter__label"
            htmlFor="inputFilter"
         >
            Enter the name of the Pokemon
         </label>
      </form>
   )
}