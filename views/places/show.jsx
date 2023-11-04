const React = require("react");
const Def = require("../default");

function show(data) {
  return (
    <Def>
      <main>
        <div className="row">
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <div id="showdiv">
              <h2 id="show">Rating</h2>
              <p>Not Rated</p>
            </div>
            <div id="showdiv">
              <h2 id="show">Descrip</h2>
              <h3>{data.place.showEstablished()}</h3>
              <h4>Serving {data.place.cuisines}</h4>
            </div>
            <div id="showdiv">
              <h2 id="show">Comments</h2>
              <p>No Comments Yet</p>
            </div>
          </div>
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
