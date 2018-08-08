import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  petsInPetComponent = () => {
    return this.props.pets.map((pet) => {
      return <div key={pet.id}><Pet pet={pet} isAdopted={pet.isAdopted} onAdoptPet={this.props.onAdoptPet}
      adoptedPets={this.props.adoptedPets}/></div>
    })
  }

  render() {
    return <div className="ui cards">
      {this.petsInPetComponent()}
    </div>
  }
}

export default PetBrowser
