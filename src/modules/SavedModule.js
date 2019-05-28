import React, { Component } from 'react';
import PetTag from '../components/PetTag';
import PetCard from '../components/PetCard';
import { Modal, CardActionArea } from '@material-ui/core';
import Note from '../components/Note';


class SavedModule extends Component {
    state = {
        openModal: false,
        petId: null,
    }

    handleOpen(e, id) {
        e.preventDefault();
        this.setState({ openModal: true, petId: id });
    }

    handleClose(e) {
        e.preventDefault();
        this.setState({ openModal: false });
    }

    render() {
        const savedPets = JSON.parse(localStorage.getItem('savedPets')) ? JSON.parse(localStorage.getItem('savedPets')) : [];
        const currentPet = savedPets.find(pet => pet.id === this.state.petId);

        return (
            <div>
              { savedPets.length > 0 ?
                savedPets.map(pet => {
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
                <Note
                    message={'No saved pets yet. Start clicking "Pawsible"!'} 
                />
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

export default SavedModule;
