import Navbar from "../components/Navbar"
import SearchBar from "../components/SearchBar"
import WeatherCard from "../components/WeatherCard"


function Home(){

return(

<div className="
min-h-screen
bg-gradient-to-br
from-blue-500
to-purple-700
">

<Navbar/>


<div className="
flex
flex-col
items-center
gap-10
mt-20
">


<SearchBar/>


<WeatherCard/>


</div>


</div>

)

}


export default Home