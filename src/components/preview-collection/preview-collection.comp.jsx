import React from 'react';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item.comp'

const PreviewCollection = ({title, items}) => (
    <div className='preview-collection'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter( (item, ind ) => ind < 4).map(item => (
                     <CollectionItem key={item.id} item={item}/> 
                ))}
        </div>
    </div>
);
export default PreviewCollection;