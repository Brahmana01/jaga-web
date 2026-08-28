import HeroSection
  from './sections/HeroSection'

import QuickActions
  from './sections/QuickActions'

import ScenarioSection
  from './sections/ScenarioSection'

import ImpactSection
  from './sections/ImpactSection'

import SocialImpactSection
  from './sections/SocialImpactSection'

import WhyJagaSection
  from './sections/WhyJagaSection'

import TrustEcosystem
  from '../../components/common/TrustEcosystem'

import PartnerStrip
  from '../../components/common/PartnerStrip'


function HomePage() {

  return (
    <>

      <HeroSection />

      <QuickActions />

      <ScenarioSection />

      <TrustEcosystem />

      <PartnerStrip />

      <ImpactSection />

      <SocialImpactSection />

      <WhyJagaSection />

    </>
  )
}


export default HomePage