import Navbar from "../components/layout/Navbar";
import SearchBar from "../components/ui/SearchBar";
import WeatherCard from "../components/weather/WeatherCard";

import backgroundImage from "../assets/images/colombo.jpg";

import { motion } from "framer-motion";

function Home() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Foreground Content */}
      <div className="relative z-10">

        <Navbar />

        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            min-h-[80vh]
            gap-10
          "
        >
          <SearchBar />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <WeatherCard />
          </motion.div>

        </div>

      </div>
    </div>
  );
}

export default Home;