import React, { Component } from 'react'
import SimpleSlider from './carusel'

export class HomeSection extends Component {
  render() {
    return (
      <section className='Home'>
        <SimpleSlider/>
      </section>
    )
  }
}

export default HomeSection