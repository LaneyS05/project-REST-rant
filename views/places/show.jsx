const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <h1>{data.place.name}</h1>
        <img src={data.place.pic} alt={data.place.name} />
        <div id="showdiv">
          <h2 id="show">Rating</h2>
          <p>Not Rated</p>
        </div>
        <div id="showdiv">
          <h2 id="show">Descrip</h2>
          <p>Located in Phoenix, AZ and serving Coffee, Bakery</p>
        </div>
        <div id="showdiv">
          <h2 id="show">Comments</h2>
          <p>No Comments Yet</p>
        </div>
      </main>
      <div>
        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
          Edit
        </a>
        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
          <button type="submit" className="btn btn-danger">
            Delete
          </button>
        </form>
      </div>
    </Def>
  );
}

module.exports = show;
