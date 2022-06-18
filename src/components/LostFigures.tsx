import React from 'react';
import { Figure } from '../modules/figures/Figure';

interface LostFigureProps {
  title: string;
  figures: Figure[];
}

const LostFigures: React.FC<LostFigureProps> = ({ title, figures }) => {
  return (
    <div className="Lost">
      <h3>{title}</h3>
      {figures.map((fig) => (
        <div key={fig.id}>
          {fig.name} {fig.logo && <img src={fig.logo} alt="#" />}
        </div>
      ))}
    </div>
  );
};

export default LostFigures;
