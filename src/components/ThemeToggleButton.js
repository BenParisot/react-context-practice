import React, { PureComponent } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

export default class ThemeToggleButton extends PureComponent {
    static contextType = ThemeContext;
    toggleTheme = () => {
        this.context.isLightTheme = false;
        console.log(this.context);
    }
    render(){
    // const { isLightTheme } = this.context;
    return (
        <button onClick={this.toggleTheme}>Toggle Theme</button>
    )
    }
}
