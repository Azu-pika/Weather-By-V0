import { Header } from '@/components/header'
import { CurrentWeather } from '@/components/current-weather'
import { Forecast } from '@/components/forecast'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-400 to-sky-200">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <main className="mt-8">
          <CurrentWeather />
          <Forecast />
        </main>
      </div>
    </div>
  )
}

