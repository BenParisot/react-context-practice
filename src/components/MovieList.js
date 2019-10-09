import React, { PureComponent } from 'react';
import {ThemeContext} from '../contexts/ThemeContext';

export default class MovieList extends PureComponent {
    static contextType = ThemeContext;
    
    render() {
        const { isLightTheme, lightTheme, darkTheme } = this.context;
        const theme = isLightTheme ? lightTheme : darkTheme;
        return (
            <div className="book-list" style={{ backgroundColor: theme.cta, color: theme.font }}>
                <ul>
                    <li>The Color Purple</li>
                    <li>Y Tu Mama Tambien</li>
                    <li>The 5th Element</li>
                </ul>
            </div>
        )
    }
}
