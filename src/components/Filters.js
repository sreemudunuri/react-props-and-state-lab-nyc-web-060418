import React from 'react'

class Filters extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      currentType: null,
    }
  }

  actionOnChange = (event) => {
    this.setState({
      currentType: event.target.value
    })
    this.props.onChangeType(event.target.value)
  }

  actionOnClick = (event) => {
    this.props.onFindPetsClick()
  }


  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type"
          id="type"
          onChange={this.actionOnChange}
          >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button"
          onClick={this.actionOnClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters
