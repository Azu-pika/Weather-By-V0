import { GlassWaterIcon as Water } from 'lucide-react'

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Water className="h-8 w-8 text-blue-600" />
        <h1 className="text-2xl font-bold text-white">Venice Weather</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white hover:text-blue-200">Home</a></li>
          <li><a href="#" className="text-white hover:text-blue-200">Forecast</a></li>
          <li><a href="#" className="text-white hover:text-blue-200">Maps</a></li>
        </ul>
      </nav>
    </header>
  )
}

