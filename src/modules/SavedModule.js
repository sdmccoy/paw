import React, { Component } from 'react';
import { connect } from 'react-redux';
import PetTag from '../components/PetTag';
import Loading from '../components/Loading';


class SavedModule extends Component {

    render() {
        return (
            <div>
              { this.props.savedPets.length > 0 ?
                this.props.savedPets.map(pet => {
                    return <PetTag
                                key={pet.id}
                                pet={pet}
                            />
                })
                :
                <Loading />
              }
            </div>
        );
    }
}

let mapStateToProps = (state) => ({
    savedPets: state.saved
});

let mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SavedModule);
