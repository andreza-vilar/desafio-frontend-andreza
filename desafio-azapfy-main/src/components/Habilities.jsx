import React, { useContext } from 'react';
import MyContext from '../provider/MyContext';
import '../styles/heroModal.css';

export default function Habilities({ hero1Total, hero2Total }) {
  const { heroesFigth } = useContext(MyContext);
  const titles = Object.keys(heroesFigth[0].powerstats);
  const hero1 = Object.values(heroesFigth[0].powerstats);
  const hero2 = Object.values(heroesFigth[1].powerstats);
  
  function compareSkills(array1, array2, hero) {
    return (
      <div>
        { array1.map((hability, index) => (
          hability > array2[index] ? <p key={index} className="green">{hability}</p> 
          : <p className="red" key={index}>{ hability } </p>
        ))}
        <h2>{ hero === 1 ? hero1Total : hero2Total }</h2>
      </div>
    )
  }

  return (
    <div className="comparar-habilidades">
      { compareSkills(hero1, hero2, 1) }
      <div>
        { titles.map((value, index) => (
          <p key={index}>{ value }</p>
        )) }
      </div>
      { compareSkills(hero2, hero1, 2) }
    </div>
  );
}
