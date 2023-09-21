import React from 'react';
import pokemonLogo from './assets/pokemonLogo.svg.webp';
import bulbasaurImg from './assets/1.png';
import charmanderImg from './assets/4.png';
import squirtleImg from './assets/7.png';
import pickachuImg from './assets/25.png';
import clefairyImg from './assets/35.png';
import psyduckImg from './assets/54.png';
import bellsproutImg from './assets/69.png';
import eeveeImg from './assets/133.png';
import snorlaxImg from './assets/143.png';
import chikoritaImg from './assets/152.png';
import cyndaquilImg from './assets/155.png';
import totodileImg from './assets/158.png';
import treeckoImg from './assets/252.png';
import torchicImg from './assets/255.png';
import mudkipImg from './assets/258.png';
import './App.css';
import PokemonCard from './PokemonCard.jsx';

function App() {
  const pokemons = [
    { img: bulbasaurImg, name: 'Bulbasaur', number: '001' },
    { img: charmanderImg, name: 'Charmander', number: '004' },
    { img: squirtleImg, name: 'Squirtle', number: '007' },
    { img: pickachuImg, name: 'Pickachu', number: '025' },
    { img: clefairyImg, name: 'Clefairy', number: '035' },
    { img: psyduckImg, name: 'Psyduck', number: '054' },
    { img: bellsproutImg, name: 'Bellsprout', number: '069' },
    { img: eeveeImg, name: 'Eevee', number: '133' },
    { img: snorlaxImg, name: 'Snorlax', number: '143' },
    { img: chikoritaImg, name: 'Chikorita', number: '152' },
    { img: cyndaquilImg, name: 'Cyndaquil', number: '155' },
    { img: totodileImg, name: 'Totodile', number: '158' },
    { img: treeckoImg, name: 'Treecko', number: '252' },
    { img: torchicImg, name: 'Torchic', number: '255' },
    { img: mudkipImg, name: 'Mudkip', number: '258' },
  ];

  return (
    <div>
      <div className="logo-container">
        <img src={pokemonLogo} alt="Pokemon Logo" className="pokemon-logo" />
      </div>
      <div className="cards-container">
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.number}
            img={pokemon.img}
            name={pokemon.name}
            number={pokemon.number}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
