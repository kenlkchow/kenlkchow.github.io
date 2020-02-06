import React from 'react'
import ReactDOM from 'react-dom'
// import { HashRouter, Switch, Route } from 'react-router-dom'


import 'bulma'
import '../src/style.scss'
import Particles from 'react-particles-js'


import Hero from './components/Hero'

const App = () => (<>
  <Particles
    params={{
      'particles': {
        'number': {
          'value': 50
        },
        'size': {
          'value': 3
        }
      },
      'interactivity': {
        'events': {
          'onhover': {
            'enable': true,
            'mode': 'repulse'
          }
        }
      }
    }}  />
  <Hero />

</>)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)