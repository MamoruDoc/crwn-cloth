import React from 'react';
import CollectionsOverview from '../../components/collection-overview/collection-overview.comp'
import CollectionPage from '../collection/collection.comp';
import {Route} from 'react-router-dom';


const ShopPage = ({match}) =>  (
 <div className='shoppage'>
     <Route exact path={`${match.path}`} component={CollectionsOverview} />
     <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
 </div>
    );
 

export default ShopPage; 