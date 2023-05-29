export enum DamageType {
  MAGIC = 'MAGIC',
  PHYSICAL = 'PHYSICAL',
}

export class Damage {
  private _type!: DamageType
  private _amount!: number

  constructor(type: DamageType, amount: number) {
    this._amount = amount
    this._type = type
  }

  get type() {
    return this._type
  }

  get amount() {
    return this._amount
  }
}
