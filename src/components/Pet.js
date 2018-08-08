import React from 'react'

class Pet extends React.Component {

  buttonForAdoptionStatus = () => {

    const isPetAdopted = this.props.adoptedPets.find((pet) => {
      return pet.id === this.props.pet.id
    })

    if (isPetAdopted) {
      return <button className="ui disabled button">Already adopted</button>
    } else {
      return <button className="ui primary button" onClick={this.actionOnAdoptButonClick} data-petid={this.props.pet.id}>Adopt pet</button>
    }
  }

  actionOnAdoptButonClick = (event) => {

    const petid = event.target.getAttribute('data-petid')
    this.props.onAdoptPet(petid)
  }

  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {this.props.pet.name}
            {this.props.pet.gender === 'male' ? '♂' : '♀'}
          </a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age:{this.props.pet.age}</p>
            <p>Weight:{this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.buttonForAdoptionStatus()}
        </div>
      </div>
    )
  }
}

export default Pet
