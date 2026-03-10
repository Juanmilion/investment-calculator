import { useState } from "react"
import "./styles/app.css"
import InvestmentForm from "./components/InvestmentForm"
import InvestmentChart from "./components/InvestmentChart"
import { calculateInvestment } from "./utils/calculateInvestment"

function App() {

  const [data, setData] = useState<any[]>([])
  const [summary, setSummary] = useState<any>(null)

  const handleCalculate = (
    initial: number,
    monthly: number,
    years: number,
    rate: number
  ) => {

    const results = calculateInvestment(initial, monthly, years, rate)

    const invested = initial + monthly * years * 12
    const finalValue = results[results.length - 1].value
    const profit = finalValue - invested

    setSummary({
      invested,
      finalValue,
      profit
    })

    setData(results)
  }

  return (
    <div className="app">

      <h1>Investment Calculator</h1>

      <p className="subtitle">
        Estimate how your investments could grow over time.
      </p>

      <InvestmentForm onCalculate={handleCalculate} />

      {summary && (
        <div className="results">

          <div className="result-card">
            <h3>Total invested</h3>
            <p>€{summary.invested.toFixed(0)}</p>
          </div>

          <div className="result-card">
            <h3>Total profit</h3>
            <p>€{summary.profit.toFixed(0)}</p>
          </div>

          <div className="result-card">
            <h3>Final value</h3>
            <p>€{summary.finalValue.toFixed(0)}</p>
          </div>

        </div>
      )}

      {data.length > 0 && (
        <InvestmentChart data={data} />
      )}

    </div>
  )
}

export default App