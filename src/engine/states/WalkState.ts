import { State } from '../State'
export class WalkState extends State {
  constructor() {
    super('walk')
  }
  enter(prevState: string): void {
    console.log(prevState)
  }
  exit() {}
  update() {}
}
