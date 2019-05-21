import React from 'react';
import SearchModule from './SearchModule';
import SavedModule from './SavedModule';
import SettingsModule from './SettingsModule';

const ModuleContainer = ({ pets, user, key }) => {
    console.log(pets)
    let moduleToRender;
    switch (key) {
        case 'search':
            moduleToRender = <SearchModule pets={ pets } />;
            break;

        case 'saved':
            moduleToRender = <SavedModule />;
            break;

        case 'settings':
            moduleToRender = <SettingsModule user={ user } />;
            break;
    
        default:
            break;
    }
    console.log(moduleToRender)
    return (
        { moduleToRender }
    );
}

export default ModuleContainer;