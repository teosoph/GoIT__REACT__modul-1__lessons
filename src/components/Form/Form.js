import { Component } from "react";

export class Form extends Component {
  state = {
    name: "",
    surname: "",
    age: "",
    adult: "Yes",
    accepts: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(this.state);
          }}
        >
          <div>
            <label>
              Your name:
              <input
                name="name"
                onChange={this.handleChange}
                value={this.state.name}
              />
            </label>
          </div>
          <div>
            Your surname:
            <input
              name="surname"
              onChange={this.handleChange}
              value={this.state.surname}
            />
          </div>

          <div>
            Photo:
            <input
              name="photo"
              onChange={this.handleChange}
              type="file"
              value={this.state.photo}
            />
          </div>
          <div>
            <input
              type="radio"
              checked={this.state.adult === "Yes"}
              name="adult"
              value={"Yes"}
              onChange={this.handleChange}
            />
            <input
              type="radio"
              checked={this.state.adult === "No"}
              name="adult"
              value={"No"}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <select
              name="age"
              value={this.state.age}
              onChange={this.handleChange}
            >
              <option value="" disabled></option>
              <option value="18-25">18-25</option>
              <option value="26-35">26-35</option>
              <option value="36+">36+</option>
            </select>
          </div>
          <div>
            Accept policy:
            <input
              name="accepts"
              onChange={this.handleChange}
              type="checkbox"
              value={this.state.accepts}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
