const React = require('react')

function places(){
  return(
    <main>
      <h1>Places</h1>
    </main>
  )
}

module.exports = places

function index(data){
  let placesFormatted = data.places.map((places) => {
    return (
      <div>
        <h2>{places.name}</h2>
        <img src={places.pic} alt={places.name}/>
      </div>
    )
  })
  return(
    <main>
      <h1>Places index page</h1>
      {placesFormatted}
    </main>
  )
}

module.exports = index

