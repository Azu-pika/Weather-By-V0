import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sun, Cloud, CloudRain } from 'lucide-react'

export function Forecast() {
  // This would typically come from an API
  const forecastData = [
    { day: 'Monday', temp: 23, icon: Sun },
    { day: 'Tuesday', temp: 22, icon: Cloud },
    { day: 'Wednesday', temp: 20, icon: CloudRain },
    { day: 'Thursday', temp: 21, icon: Sun },
    { day: 'Friday', temp: 24, icon: Sun },
  ]

  return (
    <Card className="mt-8 bg-white/80 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">5-Day Forecast</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-4">
          {forecastData.map((day) => (
            <div key={day.day} className="text-center">
              <div className="font-medium">{day.day}</div>
              <day.icon className="mx-auto my-2 h-8 w-8 text-blue-500" />
              <div className="text-lg font-semibold">{day.temp}°C</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

