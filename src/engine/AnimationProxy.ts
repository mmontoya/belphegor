export class AnimationProxy {
  private _animations
  constructor(animations: any) {
    this._animations = animations
  }

  get animations() {
    return this._animations
  }
}
