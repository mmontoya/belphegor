import { State } from './State'

interface StateMap {
  [key: string]: State
}

export class FiniteStateMachine {
  private _states: StateMap
  private currentState: string | null

  constructor() {
    this._states = {}
    this.currentState = null
  }

  get states() {
    return this._states
  }

  addState(name: string, type: State) {
    this._states[name] = type
  }

  setState(name: string) {
    const prevState = this.currentState

    if (prevState) {
      if (prevState === name) {
        return
      }
      this._states[prevState].exit()
    }

    const state = this._states[name]
    this.currentState = state.name
    if (prevState) {
      state.enter(prevState)
    }
  }

  update(timeElapsed: number, input: number) {
    if (this.currentState) {
      this._states[this.currentState].update(timeElapsed, input)
    }
  }
}
