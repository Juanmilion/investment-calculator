import { useState } from "react"
import InvestmentForm from "./components/InvestmentForm"
import InvestmentChart from "./components/InvestmentChart"
import { calculateInvestment } from "./utils/calculateInvestment"

function App() {

  const [data, setData] = useState<any[]>([])

  const handleCalculate = (
    initial: number,
    monthly: number,
    years: number,
    rate: number
  ) => {

    const results = calculateInvestment(
      initial,
      monthly,
      years,
      rate
    )

    setData(results)
  }

  return (
    <div className="container">

      <h1>Investment Calculator</h1>

      <InvestmentForm onCalculate={handleCalculate} />

      {data.length > 0 && (
        <InvestmentChart data={data} />
      )}

    </div>
  )
}

export default App