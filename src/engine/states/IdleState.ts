import { State } from '../State'
export class IdleState extends State {
  constructor() {
    super('idle')
  }
  enter(prevState: string): void {
    console.log(prevState)
  }

  exit() {}
  update() {}
}
