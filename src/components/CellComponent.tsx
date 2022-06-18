import React, { FC } from 'react';
import { Cell } from '../modules/Cell';

interface CEllProps {
  cell: Cell;
}

const CellComponent: FC<CEllProps> = ({ cell }) => {
  return <div className={['Cell', cell.color].join(' ')}>
    
  </div>;
};

export default CellComponent;
