import React, {useState} from 'react';
import SHOP_DATA from './shoppage.data';
import PreviewCollection from '../../components/preview-collection/preview-collection.comp';

const ShopPage = () => {
    const [collection, setCollection] = useState(SHOP_DATA);
    return (
 <div className='shoppage'>
     {collection.map(
        ( {id, ...otherCollectionProps} )=> 
        (<PreviewCollection key= {id} {...otherCollectionProps} />)
     )}
 </div>
    )
}
export default ShopPage;