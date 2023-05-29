import { Dagger } from './Weapons'
import { Weaponable } from './Weaponable'

export class AssassinFactory implements Weaponable {
  getWeapon() {
    return new Dagger()
  }
}
