import { Weapon } from '../Weapon'
import { DamageType } from '../Damage'
import { Damage } from '../Damage'
export class Dagger extends Weapon {
  constructor() {
    super('Dagger', new Damage(DamageType.PHYSICAL, 33))
  }
}
