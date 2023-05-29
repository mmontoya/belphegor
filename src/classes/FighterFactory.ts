import { Broadsword } from './Weapons'
import { Weapon } from './Weapon'
import { Weaponable } from './Weaponable'
export class FighterFactory implements Weaponable {
  getWeapon(): Weapon {
    return new Broadsword()
  }
}
