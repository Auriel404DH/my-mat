import { Cell } from './../Cell';
import { Colors } from './../Colors';
import { Figure, FigureNames } from './Figure';
import BlackLogo from './../../assets/black-king.png';
import WhiteLogo from './../../assets/white-king.png';

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    return true;
  }
}
