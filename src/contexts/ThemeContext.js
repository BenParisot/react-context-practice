import React, { createContext, PureComponent } from 'react';

export const ThemeContext = createContext()

export default class ThemeContextProvider extends PureComponent {
    state = {
        isLightTheme: true,
        lightTheme: {
            background: '#ffe5d4',
            font: '#694f5d',
            cta: '#efc7c2'
        },
        darkTheme: {
            background: '#68a691',
            font: '#694f5d',
            cta: '#bfd3c1'
        }
    }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state}}>
                {this.props.children}
            </ThemeContext.Provider>
        )
    }
}
