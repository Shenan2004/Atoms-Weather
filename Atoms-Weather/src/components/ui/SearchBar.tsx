function SearchBar(){

  return(
    <div className="flex justify-center">

      <input
        className="
        w-96
        p-4
        rounded-2xl
        bg-white/20
        backdrop-blur-md
        text-white
        placeholder-white
        "
        placeholder="Search city..."
      />

    </div>
  )
}

export default SearchBar