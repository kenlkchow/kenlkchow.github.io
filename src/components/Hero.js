import React, { useState, useEffect } from 'react'

const Hero = () => {

  return <>
    <section className="hero is-primary is-fullheight">
      <div className="hero-body">
        <h1 className="title has-text-black"> Ken Chow </h1>
        <h2 className="subtitle has-text-black"> Junior Software Developer </h2>
      </div>
      <div className="hero-foot has-background-light">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li>
                <a className="has-text-black" href="#About">About</a>
              </li>
              <li>
                <a className="has-text-black" href="#Skills">Skills</a>
              </li>
              <li>
                <a className="has-text-black">Projects</a>
              </li>
              <li>
                <a className="has-text-black">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  </>
}

export default Hero