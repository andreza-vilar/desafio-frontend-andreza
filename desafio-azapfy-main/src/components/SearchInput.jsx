import React from 'react';
import '../styles/input.css';

export default function SearchInput({ search, onChange }) {
  return (
    <div className="wrapper">
      <div className="input-data">
        <input
          type="text"
          value={ search }
          onChange={ (e) => onChange(e.target.value) }
          required
        />
        <div className="underline"></div>
        <label>Pesquise um personagem | Ex: Spider Man</label>
      </div>
    </div>
  );
}
