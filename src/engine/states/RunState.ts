import { State } from '../State'
export class RunState extends State {
  constructor() {
    super('run')
  }
  enter(prevState: string): void {
    console.log(prevState)
  }
  exit() {}
  update() {}
}
