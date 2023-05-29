export abstract class State {
  private _name: string
  constructor(name: string) {
    this._name = name
  }

  get name() {
    return this._name
  }

  set name(name: string) {
    this._name = name
  }

  abstract exit(): void
  abstract update(timeElapsed: number, input: number): void
  abstract enter(prevState: string): void
}
