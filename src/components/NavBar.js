import React, { PureComponent} from 'react';

export default class NavBar extends PureComponent {
    render() {
        return (
            <nav>
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
