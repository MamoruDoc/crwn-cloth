import React from 'react';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.comp'

const PreviewCollection = ({title, items}) => (
    <div className='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter( (itm, ind ) => ind < 4).map(({id, ...otherItemProps}) => (
                     <CollectionItem key={id} {...otherItemProps} /> 
                ))}
        </div>
    </div>
);
export default PreviewCollection;