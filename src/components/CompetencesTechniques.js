import React from 'react';
import cvData from '../data/cvData';

function CompetencesTechniques() {
  return (
    <>
      <h3>Developpement Web</h3>
      <ul>
        {cvData.competences.developpementWeb.map((item, index) => (
          <li key={index} className={item.title ? 'li_title' : ''}>
            {item.text}
          </li>
        ))}
      </ul>
      <h3>Logistique</h3>
      <ul>
        {cvData.competences.logistique.map((item, index) => (
          <li key={index} className={item.title ? 'li_title' : ''}>
            {item.text}
          </li>
        ))}
      </ul>
    </>
  );
}

export default CompetencesTechniques;