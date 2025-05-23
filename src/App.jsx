import { Features } from "tailwindcss"
import Header from "./Components/header"
import HeroSection from "./Components/HeroSection"
import FeaturesSection from "./Components/FeaturesSection"
import Testimonials from "./Components/Testimonials"
import LearnMore from "./Components/LearnMore"
import Footer from "./Components/Footer"
import TableContent from "./Components/TableContent"
import { useState } from "react"

function App() {
  const [tableData, setTableData] = useState([])
  return (
    <div className="font-[Roboto]">
    <Header />
    <HeroSection tableData={tableData} setTableData={setTableData}/>
    <FeaturesSection />
    <Testimonials />
    <LearnMore />
    <TableContent tableData={tableData} />
    <Footer />
    </div>
  )
}

export default App