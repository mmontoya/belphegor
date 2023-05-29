import { FiniteStateMachine } from './FSM'
import { DanceState, IdleState, RunState, WalkState } from './states/'

export class CharacterFSM extends FiniteStateMachine {
  private _proxy: string
  constructor(proxy: string) {
    super()
    this._proxy = proxy
    this.init()
  }

  get proxy() {
    return this._proxy
  }

  init() {
    this.addState('idle', new IdleState())
    this.addState('walk', new WalkState())
    this.addState('run', new RunState())
    this.addState('dance', new DanceState())
  }
}
