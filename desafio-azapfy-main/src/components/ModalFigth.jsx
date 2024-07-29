import React, { useContext } from 'react';
import Modal from 'react-modal';
import MyContext from '../provider/MyContext';
import { customStyles } from '../service';
import Habilities from './Habilities';
import HeroCard from './HeroCard';
import '../styles/heroModal.css';
import { MdClose } from "react-icons/md";

export default function ModalFigth({ modalIsOpen, closeModal }) {
  const { heroesFigth } = useContext(MyContext);
  const hero1 = Object.values(heroesFigth[0].powerstats)
    .reduce((acc, sum) => acc += sum, 0);
  
  const hero2 = Object.values(heroesFigth[1].powerstats)
    .reduce((acc, sum) => acc += sum, 0);
  
  const resultBattle = hero1 > hero2 ? `${heroesFigth[0].name} Winner` 
    : `${heroesFigth[1].name} wins`;

  function endBattle() {
    const takeFromLocalStorage = JSON.parse(localStorage.getItem('historyBattles'));
    const sendToLocalStorage = { 
      imageHero1: heroesFigth[0].images.sm,
      imageHero2: heroesFigth[1].images.sm,
      result: resultBattle
    }
    localStorage
      .setItem('historyBattles', 
        JSON.stringify([...takeFromLocalStorage, sendToLocalStorage]));
    closeModal();
  }

  return (
    <div className="container-modal">
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => endBattle()}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal"
      >
        <MdClose onClick={ endBattle } className="icon-close" />
        <h1 className="winner">{resultBattle}</h1>
        <div className="modal-heroes">
        { heroesFigth.map((hero, index) => (
          <HeroCard
            key={index}
            name={hero.name}
            images={hero.images}
          />
        )) }
        </div>
        <Habilities hero1Total={ hero1 } hero2Total={ hero2 } />
      </Modal>
    </div>
  );
}
