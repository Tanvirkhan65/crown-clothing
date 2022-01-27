import React, { Component } from 'react';
import CollectionPreview from '../../preview collection/CollectionPreview';
import SHOP_DATA from './shop.data';

export default class Shop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collection: SHOP_DATA,
        };
    }

    render() {
        const { collection } = this.state;
        return (
            <div className="shop-page">
                {
                    collection.map(({ id, ...otherCollection }) => (
                        // eslint-disable-next-line react/jsx-props-no-spreading
                        <CollectionPreview key={id} {...otherCollection} />
                    ))
                }
            </div>
        );
    }
}
