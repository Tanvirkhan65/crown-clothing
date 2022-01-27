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
                    linkUrl: 'hats',
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: '',
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: '',
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    size: 'large',
                    linkUrl: '',
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5,
                    size: 'large',
                    linkUrl: '',
                },
            ],
        };
    }

    render() {
        const { section } = this.state;
        return (
            <div className="directory-menu">
                {section.map(({
                    id, title, imageUrl, size, linkUrl,
                }) => (
                    <MenuItem
                        key={id}
                        title={title}
                        imageUrl={imageUrl}
                        size={size}
                        linkUrl={linkUrl}
                    />
                ))}
            </div>
        );
    }
}
