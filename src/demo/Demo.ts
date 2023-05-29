import { Engine } from '../engine/Engine'
import * as THREE from 'three'
import { Box } from './Box'
import { Experience } from '../engine/Experience'
import { Resource } from '../engine/Resources'
import { DanceState, IdleState } from '../engine/states/'
import { CharacterFSM } from '../engine/CharacterFSM'
import { CharacterClass } from '../constants'
import { CharacterFactory } from '../classes/CharacterFactory'

export class Demo implements Experience {
  resources: Resource[] = []

  constructor(private engine: Engine) {}

  init() {
    const plane = new THREE.Mesh(
      new THREE.PlaneGeometry(10, 10),
      new THREE.MeshStandardMaterial({ color: 0xffffff })
    )

    plane.rotation.x = -Math.PI / 2
    plane.receiveShadow = true

    this.engine.scene.add(plane)
    this.engine.scene.add(new THREE.AmbientLight(0xffffff, 0.5))

    let directionalLight = new THREE.DirectionalLight(0xffffff, 1)
    directionalLight.castShadow = true
    directionalLight.position.set(2, 2, 2)

    this.engine.scene.add(directionalLight)

    const box = new Box()
    box.castShadow = true
    box.rotation.y = Math.PI / 4
    box.position.set(0, 0.5, 0)

    this.engine.scene.add(box)

    const idle = new IdleState()
    const dance = new DanceState()

    const charFSM = new CharacterFSM('idle')

    charFSM.init()
    charFSM.addState('dance', dance)

    console.log(idle.name, dance.name, charFSM.states['idle'].name)

    Object.keys(charFSM.states).map((state) =>
      console.log(charFSM.states[state].name)
    )

    const printStats = (charClass: CharacterClass) => {
      const factory = CharacterFactory.getFactory(charClass)
      const weapon = factory.getWeapon()
      return console.log(
        `You have chosen the ${charClass.toLowerCase()} class with a ${
          weapon.name
        } that does ${
          weapon.damage.amount
        } ${weapon.damage.type.toLowerCase()} damage`
      )
    }

    let player = CharacterClass.FIGHTER

    printStats(player)
    player = CharacterClass.MAGE
    printStats(player)

    player = CharacterClass.ASSASSIN
    printStats(player)
  }

  resize() {}

  update() {}
}
