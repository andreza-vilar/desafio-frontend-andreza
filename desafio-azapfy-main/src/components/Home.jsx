import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../provider/MyContext';
import requestApi from '../service';
import HeroCard from './HeroCard';
import '../styles/home.css';
import SearchInput from './SearchInput';
import ModalFigth from './ModalFigth';
import { Link } from 'react-router-dom';

export default function Home() {
  const {
    heroesList,
    setHeroesList,
    heroesFigth,
    modalIsOpen,
    closeModal
  } = useContext(MyContext);
  const [searchInput, setSearchInput] = useState('');

  useEffect(() => {
    requestApi(setHeroesList);
    if(localStorage.getItem('historyBattles') === null) {
      localStorage.setItem('historyBattles', '[]');
    }
  }, [setHeroesList]);

  return (
    <>
      <Link to="/history" className="history-link">
        Hístorico de Batalhas
      </Link>
      <SearchInput search={ searchInput } onChange={ setSearchInput } />
      <div className="container">
        { heroesList[0]?.name ?
          heroesList
          .filter(({ name }) => name.toLowerCase().includes(searchInput.toLowerCase()))
          .map((hero, index) => (
          <HeroCard
            key={ index }
            name={ hero.name }
            images={ hero.images }
            id={ hero.id }
            codition={ true }
          />
        )) : <h1>Loading...</h1> }
        { heroesFigth.length === 2 && <ModalFigth modalIsOpen={ modalIsOpen } closeModal={ closeModal } />}
        
      </div>
    </>
  );
}
