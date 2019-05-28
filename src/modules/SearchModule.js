import React, { Component } from 'react';
import { connect } from 'react-redux';
import PetCard from '../components/PetCard';
import TextButton from '../components/TextButton';
import Loading from '../components/Loading';
import { filterPetList, addToSavedList } from '../actions/searchActions';

class SearchModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            filteredPets: [],
        };
    }

    handleClick(e, action, petId, currentPet = {}) {
        e.preventDefault();
        const tickUp = this.state.counter + 1;
        this.setState({ counter: tickUp });
        action === 'save' && this.props.savePet(currentPet);
        this.props.removePet(petId);
    }

    render() {
        const { userSettings, petList } = this.props;
        const filteredPets = petList.filter(pet => pet.type === userSettings.typePreference &&
                pet.age >= parseInt(userSettings.ageRange.min, 10) &&
                pet.age <= parseInt(userSettings.ageRange.max, 10)
        )
        const currentPet = filteredPets[0];

        return (
            <div>
                { filteredPets.length > 0 ?
                    <div>
                        <PetCard
                            id={currentPet.id}
                            img={currentPet.img}
                            name={currentPet.name}
                            age={currentPet.age}
                            sex={currentPet.sex}
                            profile={currentPet.profile}
                        />
                        <TextButton
                            variant='contained'
                            size='small'
                            color='secondary'
                            name='Not Now'
                            onClick={(e) => this.handleClick(e, 'remove', currentPet.id)}
                        />
                        <TextButton
                            variant='contained'
                            size='small'
                            color='primary'
                            name='Pawsibly'
                            onClick={(e) => this.handleClick(e, 'save', currentPet.id, currentPet)}
                        />
                    </div>
                    :
                    <Loading />    
                }
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    petList: state.search,
    userSettings: state.settings,
});

let mapDispatchToProps = (dispatch) => ({
  removePet: (petId) => dispatch(filterPetList(petId)),
  savePet: (pet) => dispatch(addToSavedList(pet)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchModule);