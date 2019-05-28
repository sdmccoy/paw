import React from 'react';
import SearchModule from './SearchModule';
import SavedModule from './SavedModule';
import SettingsModule from './SettingsModule';

const ModuleContainer = (props) => {
        let moduleToRender;

        switch (props.moduleKey) {
            case 'search':
                moduleToRender = <SearchModule key='search' />;
                break;
    
            case 'saved':
                moduleToRender = <SavedModule key='saved' />;
                break;
                
            case 'settings':
                moduleToRender = <SettingsModule key='settings' />;
                break;
            
            default:
                return 'search';
        }
        return (
            [ moduleToRender ]
            );
}

export default ModuleContainer;