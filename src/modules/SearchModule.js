import React, { Component } from 'react';
import { connect } from 'react-redux';
import PetCard from '../components/PetCard';

class SearchModule extends Component {
    constructor(props){
        super(props);
        this.state = null;
    }

    filterBySettings() {
        this.props.petList.filter(pet => {
            return true;
        })
    }

    render() {
        console.log(this.props)
        return (
            this.props.petList.map(pet => {
                return <PetCard 
                            id={pet.id}
                            img={pet.img}
                            name={pet.name}
                            age={pet.age}
                            sex={pet.sex}
                            profile={pet.profile}
                        />
            })
        )
    }
}
//map the pet list state to this module props
let mapStateToProps = (state) => ({
    petList: state.search
});

let mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SearchModule);