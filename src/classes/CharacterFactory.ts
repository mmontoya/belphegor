import { CharacterClass } from '../constants'
import { FighterFactory } from './FighterFactory'
import { MageFactory } from './MageFactory'
import { AssassinFactory } from './AssassinFactory'

export abstract class CharacterFactory {
  static getFactory(key: CharacterClass) {
    switch (key) {
      case CharacterClass.FIGHTER:
        return new FighterFactory()
      case CharacterClass.MAGE:
        return new MageFactory()
      case CharacterClass.ASSASSIN:
        return new AssassinFactory()
      default:
        return new FighterFactory()
    }
  }
}
