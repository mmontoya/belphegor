import { Damage } from '../Damage'
import { Weapon } from '../Weapon'
import { DamageType } from '../Damage'
export class Broadsword extends Weapon {
  constructor() {
    super('Broadsword', new Damage(DamageType.PHYSICAL, 25))
  }
}
