import { Weaponable } from './Weaponable'
import { MagicStaff } from './Weapons'

export class MageFactory implements Weaponable {
  getWeapon() {
    return new MagicStaff()
  }
}
