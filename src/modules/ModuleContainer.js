import React from 'react';
import SearchModule from './SearchModule';
import SavedModule from './SavedModule';
import SettingsModule from './SettingsModule';

const ModuleContainer = (props) => {
        let moduleToRender;

        switch (props.moduleKey) {
            case 'search':
                moduleToRender = <SearchModule />;
                break;
    
            case 'saved':
                moduleToRender = <SavedModule />;
                break;
                
            case 'settings':
                moduleToRender = <SettingsModule />;
                break;
            
            default:
                return 'search';
        }
        return (
            [ moduleToRender ]
            );
}

export default ModuleContainer;