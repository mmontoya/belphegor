import { Weapon } from '../Weapon'
import { Damage } from '../Damage'
import { DamageType } from '../Damage'
export class MagicStaff extends Weapon {
  constructor() {
    super('Magic staff', new Damage(DamageType.MAGIC, 40))
  }
}
