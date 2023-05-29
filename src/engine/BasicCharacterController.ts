import { CharacterFSM } from './CharacterFSM'
import * as THREE from 'three'
import { FiniteStateMachine } from './FSM'
import { AnimationProxy } from './AnimationProxy'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

interface Animation {
  clip: THREE.AnimationClip
  action: THREE.AnimationAction
}

interface Animations {
  [key: string]: Animation
}

class BasicCharacterController {
  private _params: any
  private _decceleration!: THREE.Vector3
  private _acceleration!: THREE.Vector3
  private _velocity!: THREE.Vector3
  private _animations!: Animations
  //private _input!: Input
  //private _stateMachine: FiniteStateMachine
  private _target!: THREE.Group
  private _mixer!: THREE.AnimationMixer
  private _manager!: THREE.LoadingManager

  constructor(params: any) {
    this.init(params)
  }

  init(params: any) {
    this._params = params
    this._decceleration = new THREE.Vector3(-0.0005, -0.0001, -5.0)
    this._acceleration = new THREE.Vector3(1, 0.25, 50)
    this._velocity = new THREE.Vector3(0, 0, 0)
    this._animations = {}
    //this._input = new Input()
    //this._stateMachine = new CharacterFSM(new AnimationProxy(this._animations))
    this.loadModels()
  }

  /**
   * Accessors
   */

  get animations() {
    return this._animations
  }

  loadModels() {
    const loader = new FBXLoader()
    loader.setPath('./resources/zombie/')
    loader.load('mremireh_o_desbiens.fbx', (fbx) => {
      fbx.scale.setScalar(0.1)
      fbx.traverse((c) => {
        c.castShadow = true
      })

      this._target = fbx
      this._params.scene.add(this._target)

      this._mixer = new THREE.AnimationMixer(this._target)
      this._manager = new THREE.LoadingManager()

      this._manager.onLoad = () => {
        //this._stateMachine.setState('idle')
      }

      const onLoad = (animName: string, anim: any) => {
        const clip: THREE.AnimationClip = anim.animations[0]
        const action = this._mixer.clipAction(clip)

        this._animations[animName] = {
          clip,
          action,
        }
      }
    })
  }
}
