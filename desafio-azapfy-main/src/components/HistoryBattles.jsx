import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/history.css';
import { FaArrowLeft } from "react-icons/fa";
import vslogo from '../vs.png';

export default function HistoryBattles() {
  const [historyLocal, setHistoryLocal] = useState([]);

  useEffect(() => {
    const takeFromLocalStorage = JSON.parse(localStorage.getItem('historyBattles'));
    setHistoryLocal(takeFromLocalStorage);
  }, []);

  function clearHistory() {
    setHistoryLocal([]);
    localStorage.setItem('historyBattles', '[]');
  }

  return (
    <div className="container-history">
      <h1>Hístorico de Batalhas</h1>
      <div className="back-menu">
        <Link to="/">
          <FaArrowLeft />
          Menu Principal
        </Link>
        <button type="button" onClick={ clearHistory } className="clear-history-btn">
          Limpar Hístorico
        </button>
      </div>
        { historyLocal && historyLocal.reverse().map((heroes) => (
          <div className="card-history">
            <h3>{ heroes.result }</h3>
            <img src={ heroes.imageHero1 } alt="hero" />
            <img src={ vslogo } alt="vs-logo" className="img-vs"/>
            <img src={ heroes.imageHero2 } alt="hero" />
          </div>
        )) }
    </div>
  );
}
