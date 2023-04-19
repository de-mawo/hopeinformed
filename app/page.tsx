import Contact from "./Contact"
import Footer from "./Footer"
import Header from "./Header"
import Hero from "./Hero"
import OurMission from "./OurMission"
import OurTeam from "./OurTeam"
import OurWork from "./OurWork"
import SocialProof from "./SocialProof"

function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <OurWork/>
        {/* <SocialProof/> */}
        <OurMission/>
        <OurTeam/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home