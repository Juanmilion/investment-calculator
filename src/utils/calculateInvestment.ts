export function calculateInvestment(
    initial: number,
    monthly: number,
    years: number,
    rate: number
) {
    const months = years * 12
    const monthlyRate = rate / 100 / 12

    let total = initial

    const results = []

    for (let i = 1; i <= months; i++) {
        total = total * (1 + monthlyRate) + monthly

        results.push({
            month: i,
            value: total
        })
    }

    return results
}