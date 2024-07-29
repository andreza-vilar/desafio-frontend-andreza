import React, { useContext, useState } from 'react';
import MyContext from './MyContext';


export default function MyProviver({ children }) {
  const [heroesList, setHeroesList] = useState([]);
  const [heroesFigth, setHeroesFigth] = useState([]);
  const [modalIsOpen, setModal] = useState(true);
  const [heroSelected, setHeroSelected] = useState([]);

  function openModal() {
    setModal(true);
  }

  function closeModal() {
    setHeroesFigth([]);
    setHeroSelected([]);
  }

  const reveal = {
    heroesList,
    setHeroesList,
    heroesFigth,
    setHeroesFigth,
    modalIsOpen,
    openModal,
    closeModal,
    heroSelected,
    setHeroSelected
  }

  return (
    <MyContext.Provider value={ reveal }>
      { children }
    </MyContext.Provider>
  );
}

export const useAuthContext = () => useContext(MyContext);
