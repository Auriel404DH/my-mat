import { Cell } from './../Cell';
import { Figure, FigureNames } from './Figure';
import BlackLogo from './../../assets/black-bishop.png';
import WhiteLogo from './../../assets/white-bishop.png';
import { Colors } from '../Colors';

export class Bishop extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
    this.name = FigureNames.BISHOP;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (this.cell.isEmptyDiagonal(target)) {
      return true;
    }
    return false;
  }
}