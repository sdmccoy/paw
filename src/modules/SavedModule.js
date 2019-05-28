import React, { Component } from 'react';
import { connect } from 'react-redux';
import PetTag from '../components/PetTag';
import PetCard from '../components/PetCard';
import Loading from '../components/Loading';
import { Modal, CardActionArea } from '@material-ui/core';


class SavedModule extends Component {
    state = {
        openModal: false,
        pet: null,
    }

    handleOpen(e, id) {
        console.log(id)
        e.preventDefault();
        this.setState({ openModal: true, petId: id });
    }

    handleClose(e) {
        console.log(e)
        e.preventDefault();
        this.setState({ openModal: false });
    }

    render() {
      const currentPet = this.props.savedPets.find(pet => pet.id === this.state.petId);
        return (
            <div>
              { this.props.savedPets.length > 0 ?
                this.props.savedPets.map(pet => {
                    return (
                      <CardActionArea key={pet.id} onClick={(e) => this.handleOpen(e, pet.id)}>

                              <PetTag
                                key={pet.id}
                                pet={pet}
                                
                                />
                      </CardActionArea>
                          )
                })
                :
                <Loading />
              }

              { this.state.openModal &&
                <Modal 
                    open={this.state.openModal}
                    onClose={this.handleClose.bind(this)}
                >
                    <PetCard
                        id={currentPet.id}
                        img={currentPet.img}
                        name={currentPet.name}
                        age={currentPet.age}
                        sex={currentPet.sex}
                        profile={currentPet.profile}
                    />
                </Modal>
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
