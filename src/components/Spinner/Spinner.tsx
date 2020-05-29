import React from 'react'
import './spinner.scss'

export const Spinner: React.FC = () => {
   return (
      <div className="spinner">
         <div className="spinner__border"></div>
      </div>
   )
}