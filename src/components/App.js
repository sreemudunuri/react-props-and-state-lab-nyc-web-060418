import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (newType) => {
    this.setState({
        pets: this.state.pets,
        adoptedPets: this.state.adoptedPets,
        filters: {
          type: newType,
        }
    })
  }


  onFindPetsClick = () => {
    let url = '/api/pets'
    if (this.state.filters.type !== 'all'){
      url = `/api/pets?type=${this.state.filters.type}`
    }
    fetch(url).then(res => res.json()).then(json => this.setPets(json))
  }

  setPets = (petsFetchJson) => {
    this.setState({
      pets: petsFetchJson,
      adoptedPets: this.state.adoptedPets,
      filters: this.state.filters
    })
  }

  actionOnAdoptPet = (petid) => {
    const foundPet = this.state.pets.find( (pet) => {
      return pet.id === petid
    })

    foundPet.isAdopted = true

    // const petIndex = this.state.pets.indexOf(foundPet)

    this.setState({
      adoptedPets: [
        ...this.state.adoptedPets,
        foundPet
      ]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">

              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}
              />

            </div>
            <div className="twelve wide column">

              <PetBrowser pets={this.state.pets}

               onAdoptPet={this.actionOnAdoptPet} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
