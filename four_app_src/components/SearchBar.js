import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { term: "" };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(evt) {
    this.setState({ term: evt.target.value });
  }

  onFormSubmit(evt) {
    evt.preventDefault();

    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <input
              value={this.state.term}
              onChange={this.onInputChange}
              type="text"
              placeholder="Searching..."
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
