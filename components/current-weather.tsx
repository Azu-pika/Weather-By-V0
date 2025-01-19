import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Droplets, Wind } from 'lucide-react'

export function CurrentWeather() {
  // This would typically come from an API
  const currentWeather = {
    temperature: 22,
    condition: 'Sunny',
    humidity: 60,
    windSpeed: 10
  }

  return (
    <Card className="bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Current Weather in Venice</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="text-4xl font-bold">{currentWeather.temperature}°C</div>
          <div className="flex items-center space-x-2">
            <Sun className="h-8 w-8 text-yellow-500" />
            <span className="text-lg">{currentWeather.condition}</span>
          </div>
        </div>
        <div className="mt-4 flex justify-between text-sm text-gray-600">
          <div className="flex items-center">
            <Droplets className="mr-1 h-4 w-4" />
            <span>Humidity: {currentWeather.humidity}%</span>
          </div>
          <div className="flex items-center">
            <Wind className="mr-1 h-4 w-4" />
            <span>Wind: {currentWeather.windSpeed} km/h</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

