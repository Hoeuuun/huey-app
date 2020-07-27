import React from 'react';
import { ChromePicker } from 'react-color';

export default class Hue extends React.Component {
    state = {
        background: '#fff', // TODO: set to previous lights/' state instead
    };

    handleChange = (color) => {
        this.setState({ background: color.hex });
    };

    render() {
        return (
            <div>
                <ChromePicker
                    color={ this.state.background }
                    onChangeComplete={ this.handleChange }
                />

            <p>{this.state.background}</p>
            </div>
        );
    }
}
