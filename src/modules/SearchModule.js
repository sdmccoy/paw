import React, { Component } from 'react';
import { connect } from 'react-redux';
import PetCard from '../components/PetCard';
import Button from '@material-ui/core/Button';
import Loading from '../components/Loading';
import { filterPetList, addToSavedList } from '../actions/searchActions';

class SearchModule extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    filterBySettings() {
        this.props.petList.filter(pet => {
            return true;
        })
    }

    handleClick(e, action, petId, currentPet = {}) {
        e.preventDefault();
        const tickUp = this.state.counter +1;
        this.setState({ counter: tickUp });
        action === 'save' && this.props.savePet(currentPet);
        this.props.removePet(petId);
    }

    render() {
        const currentPet = this.props.petList[1]; 
        console.log(this.props, currentPet, this.state)
        return (
            <div>
                { this.props.petList.length > 0 ?
                    <div>
                        <PetCard
                            id={currentPet.id}
                            img={currentPet.img}
                            name={currentPet.name}
                            age={currentPet.age}
                            sex={currentPet.sex}
                            profile={currentPet.profile}
                        />
                        <Button
                            variant='contained'
                            size="small"
                            color="secondary"
                            onClick={(e) => this.handleClick(e, 'remove', currentPet.id)}>
                        Not now
                        </Button>
                        <Button
                            variant='contained'
                            size="small"
                            color="primary"
                            onClick={(e) => this.handleClick(e, 'save', currentPet.id, currentPet)}>
                        Pawsibly
                        </Button>
                    </div>
                    :
                    <Loading />    
                }
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    petList: state.search
});

let mapDispatchToProps = (dispatch) => ({
  removePet: (petId) => dispatch(filterPetList(petId)),
  savePet: (pet) => dispatch(addToSavedList(pet)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchModule);