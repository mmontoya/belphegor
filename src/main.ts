import './style.scss'
import { Engine } from './engine/Engine'
import { Demo } from './demo/Demo'

new Engine({
  canvas: document.querySelector('#canvas') as HTMLCanvasElement,
  experience: Demo,
  info: {
    twitter: 'https://twitter.com/montoyland',
    github: 'https://github.com/mmontoya',
    description: 'A simple Three.js Game',
    documentTitle: 'A simple Three.js Game',
    title: 'A cube on a plane',
  },
})
