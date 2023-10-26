const React = require('react')
const Def = require('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                  <img src="/images/spaghetti-2931846_640.jpg" alt="spagetti from pixabay by Divily" />
                  <div>
                    Photo by <a href='https://pixabay.com/users/divily-110719/'>Divily</a> on <a href='https://pixabay.com/photos/spaghetti-pasta-noodles-italian-2931846/'>Pixabay</a>
                  </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home