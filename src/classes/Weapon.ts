import { Damage } from './Damage'
export abstract class Weapon {
  private _damage!: Damage
  private _name!: string

  constructor(name: string, damage: Damage) {
    this._name = name
    this._damage = damage
  }

  get damage() {
    return this._damage
  }

  get name() {
    return this._name
  }
}
