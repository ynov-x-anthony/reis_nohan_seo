import { useEffect, useState } from 'react'
import './App.css'

const HERO = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='400'%3E%3Crect width='800' height='400' fill='%231a5fa8'/%3E%3Ctext x='400' y='210' font-size='28' fill='white' text-anchor='middle'%3EVélo électrique pliable%3C/text%3E%3C/svg%3E"

const TOTAL = 400_000_000
const TRANCHE = 1_000_000

export default function App() {
  const [showBanner, setShowBanner] = useState(false)
  const [points, setPoints] = useState<number | null>(null)
  const [calculEnCours, setCalculEnCours] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowBanner(true), 1200)
    return () => clearTimeout(t)
  }, [])

  function calculerPoints() {
    setCalculEnCours(true)
    let total = 0
    let i = 0

    function calculerTranche() {
      const fin = Math.min(i + TRANCHE, TOTAL)
      for (; i < fin; i++) {
        total += Math.sqrt(i) % 7
      }
      if (i < TOTAL) {
        setTimeout(calculerTranche, 0)
      } else {
        setPoints(Math.round(total % 1000))
        setCalculEnCours(false)
      }
    }

    calculerTranche()
  }

  return (
    <div className="page">
      <div className={showBanner ? 'banner' : 'banner banner-cache'}>
        🎉 Livraison offerte ce week-end !
      </div>

      <h1>CycloShop</h1>

      <img
        className="hero"
        src={HERO}
        alt="Vélo électrique pliable"
        width={800}
        height={400}
      />

      <p>Le vélo électrique pliable le plus vendu de la boutique.</p>

      <button onClick={calculerPoints} disabled={calculEnCours}>
        {calculEnCours ? 'Calcul en cours...' : 'Calculer mes points fidélité'}
      </button>
      {points !== null && <p>Tu as {points} points fidélité.</p>}
    </div>
  )
}
