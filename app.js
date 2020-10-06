import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

function displayFact(e){
console.log(e.target);
console.log(animals[e.target.alt].facts);
let facts = animals[e.target.alt].facts;
let rand = Math.floor(Math.random() * facts.length)
let fact = animals[e.target.alt].facts[rand];
document.getElementById("fact").innerHTML = fact;
//console.log(document.getElementById("fact").innerHTML);
}

const title = '';
const showBackground = true;
const background = <img className='background' alt='ocean' src='/images/ocean.jpg' />;

const images = [];
for(const animal in animals){
    images.push(<img 
    src={animals[animal].image} 
    className='animal' 
    key={animal}
    alt={animal}
    aria-label={animal}
    role='button'
    onClick={displayFact}
     />)
}
const animalFacts = (
  <div>
  <h1>{title || 'Click an animal for a fun fact'}</h1>
  {showBackground && background}
  <div className='animals'>
  {images}

  <p id='fact'>
  
  </p>
  
  </div>
  
  </div>
);


ReactDOM.render(animalFacts, document.getElementById('root'));