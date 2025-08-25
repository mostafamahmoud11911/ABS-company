import Clients from '@/components/Clients/Clients'
import EcoSafe from '@/components/EcoSafe/EcoSafe'
import Services from '@/components/Services/Services'
import React from 'react'
import Header from '@/components/Header/Header'
import Contact from '@/components/Contact/Contact'


export default function Home() {






  return (
    <div>
      <Header />
      <Services />
      <Clients />
      <EcoSafe />
      <Contact />
    </div>
  )
}
