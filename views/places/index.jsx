const React = require('react')

function places () {
  return (
    <main>
      <h1>Places</h1>
    </main>
  )
}  

module.exports = places

function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div>
          <h2>{place.name}</h2>
          <img src={place.pic} alt={place.name}/>
        </div>
      )
    })
    return (
      <main>
        <h1>PLACES INDEX PAGE</h1>
        {placesFormatted}
      </main>
  )
  }  

module.exports = index
