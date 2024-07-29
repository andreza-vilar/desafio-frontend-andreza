import React, { useContext } from 'react';
import MyContext from '../provider/MyContext';
import '../styles/herocard.css';

export default function HeroCard({ name, images, id, codition }) {
  const { 
    heroesList,
    heroesFigth,
    setHeroesFigth,
    heroSelected,
    setHeroSelected
  } = useContext(MyContext);

  function handleFigth() {
    const findHero = heroesList.find((hero) => hero.id === id);
    setHeroesFigth([...heroesFigth, findHero]);
    setHeroSelected([...heroSelected, id])
  }

  return (
    <div
    className={ heroSelected.some((hero) => hero === id)
      && codition === true ? 'selected card' : 'card' }
    >
      <img src={ images.sm } alt="" />
      <h3>{ name }</h3>
      { codition === true &&
      <button type="button"
        className="button-select"
        onClick={ handleFigth }
      >
        Selecionar
      </button>}
    </div>
  )
}
