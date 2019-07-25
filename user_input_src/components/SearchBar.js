import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      term: ""
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormSubmit(evt) {
    evt.preventDefault();

    this.props.onSubmit(this.state.term);
  }

  onInputChange(evt) {
    this.setState({ term: evt.target.value });
  }
  render() {
    return (
      <div className="ui segment">
        <form action="" className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="">Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
