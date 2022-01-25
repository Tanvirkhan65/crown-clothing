import React, { Component } from 'react';
import MenuItem from '../menu-item/MenuItem';
import './Directory.styles.scss';

export default class Directory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            section: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    size: 'large',
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5,
                    size: 'large',
                },
            ],
        };
    }

    render() {
        const { section } = this.state;
        return (
            <div className="directory-menu">
                {section.map(({
                    title, imageUrl, id, size,
                }) => (
                    <MenuItem size={size} key={id} title={title} imageUrl={imageUrl} />
                ))}
            </div>
        );
    }
}
