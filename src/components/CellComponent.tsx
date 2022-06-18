import React, { FC } from 'react';
import { Cell } from '../modules/Cell';

interface CEllProps {
  cell: Cell;
  selected: boolean;
  click: (cell: Cell) => void;
}

const CellComponent: FC<CEllProps> = ({ cell, selected, click }) => {
  return (
    <div
      onClick={() => click(cell)}
      className={['Cell', cell.color, selected ? 'Selected' : ''].join(' ')}
      style={{ background: cell.avalible && cell.figure ? 'green' : '' }}
    >
      {cell.avalible && !cell.figure && <div className={'Availible'}></div>}
      {cell.figure?.logo && <img src={cell.figure.logo} alt="#" />}
    </div>
  );
};

export default CellComponent;
