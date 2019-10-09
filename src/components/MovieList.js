import React, { PureComponent } from 'react';

export default class MovieList extends PureComponent {
    render() {
        return (
            <div className="book-list">
                <ul>
                    <li>The Color Purple</li>
                    <li>Y Tu Mama Tambien</li>
                    <li>The 5th Element</li>
                </ul>
            </div>
        )
    }
}
