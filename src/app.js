import React from 'react'
import ReactDOM from 'react-dom'
// import { HashRouter, Switch, Route } from 'react-router-dom'


import 'bulma'
import '../src/style.scss'
import Particles from 'react-particles-js'


import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'

const App = () => (<>
  <Hero />
  <About />
  <Skills />
  <Contact />
</>)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)