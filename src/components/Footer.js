import React, {Component} from 'react';
import Button from './Button';

class Footer extends Component {
    
    handleClick(e) {
        e.preventDefault();
        // send key upstream
    }

    render(){
        return (
            <div>
                <Button
                    key={"search"}
                    name={"Search"}
                    onClick={this.handleClick.bind(this)}
                    />
                <Button
                    key={"saved"}
                    name={"Saved"}
                    onClick={this.handleClick.bind(this)}
                    />
                <Button
                    key={"settings"}
                    name={"Settings"}
                    onClick={this.handleClick.bind(this)}
                    />
            </div>
        );
    }
}

export default Footer;