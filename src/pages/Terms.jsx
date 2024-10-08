import Navbar from "../components/Navbar/Navbar"
import Terms from "../components/Terms/Terms"

const TermsPage = () => {
	return (
		<div className="select-none min-h-screen bg-background w-full font-sans">
            <Navbar links={false} />
            <Terms />
          </div>
	)
}

export default TermsPage