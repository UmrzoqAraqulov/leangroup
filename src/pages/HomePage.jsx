import React, { Component } from 'react'
import Layout from '../Components/layout'
import HomeSection from '../Components/homeSection'
import Kompaniya from '../Components/kompaniya/Kompaniya'
import Sertificat from '../Components/sertifikat/sertificat'
import Information from '../Components/Imformation/Information'
import Products from '../Components/produkti/Produkti'
import Comanda from '../Components/comanda/Comanda'
import Novosti from '../Components/novosti/Novosti'

export class HomePage extends Component {
  render() {
    return (
      <Layout>
        <HomeSection/>
        <Kompaniya/>
        <Sertificat/>
        <Products/>
        <Information/>
        <Comanda/>
        <Novosti/>
      </Layout>
    )
  }
}

export default HomePage