// ============================================
// Trading P&L Calculator — Mini Project
// By: Sadullah Karimi
// ============================================

// Trading Data
const trades = [
  { date: "26 Mar", pl: 500,  symbol: "AAPL" },
  { date: "27 Mar", pl: -200, symbol: "TSLA" },
  { date: "28 Mar", pl: 800,  symbol: "GOOGL" },
  { date: "29 Mar", pl: -100, symbol: "MSFT" },
  { date: "30 Mar", pl: 300,  symbol: "AMZN" }
]

// Task 1 — Total P&L
const totalPL = trades.reduce((sum, trade) => {
  return sum + trade.pl
}, 0)

console.log(`Total P&L: ${totalPL}`)

// Task 2 — Sirf Profits nikalo
const profits = trades.filter((trade) => {
  return trade.pl > 0
})
console.log(`Total Wins: ${profits.length}`)

// Task 3 — Sirf Losses nikalo
const losses = trades.filter((trade) => {
  return trade.pl < 0
})
console.log(`Total Losses: ${losses.length}`)

// Task 4 — Win Rate
const winRate = (profits.length / trades.length) * 100
console.log(`Win Rate: ${winRate}%`)
// Task 5 — Best Trade dhundo
const bestTrade = trades.reduce((best, trade) => {
  return trade.pl > best.pl ? trade : best
})
console.log(`Best Trade: ${bestTrade.symbol} on ${bestTrade.date} → ${bestTrade.pl}`)

// Task 6 — Worst Trade dhundo
const worstTrade = trades.reduce((worst, trade) => {
  return trade.pl < worst.pl ? trade : worst
})
console.log(`Worst Trade: ${worstTrade.symbol} on ${worstTrade.date} → ${worstTrade.pl}`)