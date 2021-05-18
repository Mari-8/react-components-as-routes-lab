import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(mov => {
        return (
        <div>
          {mov.title} 
          {mov.time}
          <ul>
            {mov.genres.map(gen => <li>{gen}</li>)}
          </ul>
        </div>
        )
      })}
    </div>
  )
}

export default Movies