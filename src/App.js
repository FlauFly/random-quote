import './App.css';
import { useState } from 'react';
import { quotes } from "./data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';


export default function App() {
  const colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  const randomColor = randomize(colors);
  const [color, setColor] = useState(randomColor);
  const [quote, setQuote] = useState(randomize(quotes));

  function randomize(list) {
    return list[Math.floor(Math.random() * list.length)]
  }

  function handleClick() {
    const randomColor = randomize(colors);
    setColor(randomColor);
    document.body.style.backgroundColor = randomColor;

    const randomQuote = randomize(quotes);
    setQuote(randomQuote);
  }



  return (
    <div id='quote-box'>
      <h1 id='text' style={{color: color,}}>{quote.sentence}</h1>
      <h2 id='author' style={{color: color,}}>- {quote.author}</h2>
      <div className='buttons'>
        <a 
          href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + '"' + quote.sentence + '" ' + quote.author} 
          className='button' 
          id='tweet-quote' 
          target="_blank" 
          style={{backgroundColor: color,}}
        >
          <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
        </a>
        <button className='button' id='new-quote' onClick={handleClick} style={{backgroundColor: color,}}>New Quote</button>        
      </div>
    </div>
  )
}
