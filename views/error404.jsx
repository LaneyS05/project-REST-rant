const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <div>
              <img src='/images/error-404.jpg' alt='lego 404 from pixabay by aitoff' />
              </div>
              <p>Oops, sorry, we can't find this page!</p>
          </main>
      </Def>
    )
  }  

module.exports = error404
