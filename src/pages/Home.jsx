import Navbar from "../components/Navbar/Navbar"
import Home from "../components/Home/Home"
import Partners from "../components/Partners/Partners"
import Features from "../components/Features/Features"
import Profits from "../components/Profits/Profits"
import Tools from "../components/Tools/Tools"
import Mobile from "../components/Mobile/Mobile"
import Footer from "../components/Footer/Footer"

import home1 from "../images/home1.svg"
import home2 from "../images/lefttriangle.svg"
import home3 from "../images/righttriangle.svg"

const HomePage=  () => {
	return (
		<div className="select-none min-h-screen bg-background w-full font-sans relative overflow-x-hidden">
            <img
              src={home1}
              alt="bg"
              className="pointer-events-none z-0 absolute top-0 left-0 right-0 mx-auto opacity-75"
            />
            <img
              src={home2}
              alt="bg"
              className="pointer-events-none z-0 absolute top-20 left-0 mx-auto opacity-60"
            />
            <img
              src={home3}
              alt="bg"
              className="pointer-events-none z-0 absolute top-14 -right-0 mx-auto opacity-75"
            />
            <Navbar links={true} />
            <Home />
            <Partners />
            <Features />
            <Profits />
            <Tools />
            <Mobile />
            <Footer />
          </div>
	)
}

export default HomePage