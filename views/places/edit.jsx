const React = require("react");
const Def = require("../default.jsx");

function edit_form(data) {
  return (
    <Def>
      <form method="POST" action={`/places/${data.place.id}?_method=PUT`}>
        <div className="row">
          <div className="form-groupup col-sm-6">
            <label htmlFor="name">Place Name</label>
            <input
              className="form-control"
              id="name"
              name="name"
              value={data.place.name}
              required
            />
          </div>
        </div>
        <div className="form-groupup col-sm-6">
          <label htmlFor="name">Place Picture</label>
          <input
            className="form-control"
            id="name"
            name="name"
            value={data.place.pic}
            required
          />
        </div>
        <div className="form-groupup col-sm-6">
          <label htmlFor="name">City</label>
          <input
            className="form-control"
            id="name"
            name="name"
            value={data.place.pic}
            required
          />
        </div>
        <div className="form-groupup col-sm-6">
          <label htmlFor="name">State</label>
          <input
            className="form-control"
            id="name"
            name="name"
            value={data.place.pic}
            required
          />
        </div>
        <div className="form-groupup col-sm-6">
          <label htmlFor="name">cuisines</label>
          <input
            className="form-control"
            id="name"
            name="name"
            value={data.place.pic}
            required
          />
        </div>
        <input type="submit" />
      </form>
    </Def>
  );
}

module.exports = edit_form;
