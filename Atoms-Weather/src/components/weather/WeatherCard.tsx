import {
  Droplets,
  Wind,
  Eye
} from "lucide-react";

function WeatherCard() {
  return (
    <div
      className="
        w-[420px]
        rounded-3xl
        bg-white/15
        backdrop-blur-xl
        border
        border-white/20
        shadow-2xl
        p-8
        text-white
        transition
        duration-300
        hover:scale-105
      "
    >
      <div className="text-center">

        <div className="text-6xl">
          ☀️
        </div>

        <h1 className="text-7xl font-bold mt-4">
          31°
        </h1>

        <h2 className="text-2xl font-semibold mt-3">
          Colombo
        </h2>

        <p className="text-white/80">
          Sri Lanka 🇱🇰
        </p>

        <p className="mt-3 text-lg">
          Sunny
        </p>

        <p className="text-white/70 mt-2">
          Monday • 6:42 PM
        </p>

      </div>

      <div className="my-6 h-px bg-white/20"></div>

      <div className="grid grid-cols-3 text-center">

        <div>
          <Droplets className="mx-auto mb-2" />
          <p className="text-sm">Humidity</p>
          <p className="font-semibold">82%</p>
        </div>

        <div>
          <Wind className="mx-auto mb-2" />
          <p className="text-sm">Wind</p>
          <p className="font-semibold">12 km/h</p>
        </div>

        <div>
          <Eye className="mx-auto mb-2" />
          <p className="text-sm">Visibility</p>
          <p className="font-semibold">10 km</p>
        </div>

      </div>
    </div>
  );
}

export default WeatherCard;