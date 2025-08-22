import About from '@/components/About/About'
import Clients from '@/components/Clients/Clients'
import CTA from '@/components/CTA/CTA'
import EcoSafe from '@/components/EcoSafe/EcoSafe'
import Pests from '@/components/Pests/Pests'
import Services from '@/components/Services/Services'
import Tools from '@/components/Tools/Tools'
import WhoAreYou from '@/components/WhoAreYou/WhoAreYou'
import React from 'react'


export default function Home() {






  return (
    <div>
      <About />
      <CTA />
      <WhoAreYou />
      <Services />
      <EcoSafe />
      <Tools />
      <Pests />
      <Clients />
    </div>
  )
}
