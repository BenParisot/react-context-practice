import React, { PureComponent} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export default class NavBar extends PureComponent {
    static contextType = ThemeContext;
    render() {
        const { isLightTheme, lightTheme, darkTheme } = this.context;
        const theme = isLightTheme ? lightTheme : darkTheme;
        return (
            <nav style={{ backgroundColor: theme.background, color: theme.font, border: `3px solid ${theme.cta}` }}>
                <h1>My Context App</h1>
                <ul>
                    <li>Home</li>                    
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
            
        )
    }
}
