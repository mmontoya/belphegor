import { State } from '../State'
export class DanceState extends State {
  constructor() {
    super('dance')
    this.finishedCallback = () => {
      this.finished()
    }
  }

  // enter(prevState) {
  //   const curAction = this.parent.proxy.animations['dance'].action
  // }
  enter() {}

  finished() {
    this.cleanup()
  }
  finishedCallback = () => {
    this.setState('idle')
  }

  update() {}
  exit() {}
  cleanup() {}
  setState(stateKey: string) {
    console.log(stateKey)
  }
}
