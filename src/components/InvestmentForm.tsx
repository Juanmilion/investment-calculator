import { useState } from "react"

type Props = {
    onCalculate: (
        initial: number,
        monthly: number,
        years: number,
        rate: number
    ) => void
}

export default function InvestmentForm({ onCalculate }: Props) {

    const [initial, setInitial] = useState(1000)
    const [monthly, setMonthly] = useState(200)
    const [years, setYears] = useState(10)
    const [rate, setRate] = useState(7)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onCalculate(initial, monthly, years, rate)
    }

    return (

        <form onSubmit={handleSubmit} className="form">

            <div className="form-group">
                <label>Initial investment (€)</label>

                <input
                    type="number"
                    value={initial}
                    onChange={(e) => setInitial(Number(e.target.value))}
                    min="0"
                />
            </div>

            <div className="form-group">
                <label>Monthly contribution (€)</label>

                <input
                    type="number"
                    value={monthly}
                    onChange={(e) => setMonthly(Number(e.target.value))}
                    min="0"
                />
            </div>

            <div className="form-group">
                <label>Investment period (years)</label>

                <input
                    type="number"
                    value={years}
                    onChange={(e) => setYears(Number(e.target.value))}
                    min="1"
                />
            </div>

            <div className="form-group">
                <label>Expected annual return (%)</label>

                <input
                    type="number"
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value))}
                    step="0.1"
                />
            </div>

            <button type="submit">
                Calculate investment growth
            </button>

        </form>
    )
}