import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {

    componentDidMount() {

        const {fetchCollectionsStart} = this.props;
        fetchCollectionsStart();

        /**
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        
         * Using observer + onservable pattern
         * 
            this.unsubscribeFromSnapshot =  collectionRef.onSnapshot(async snapshot => {
                const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
                updateCollections(collectionsMap);
                this.setState({loading: false})
            })
        */

        /**
         * Using Promise
         
         collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionsMap);
            this.setState({loading: false})
        })
        */
    }

    render() {
        const {match} = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        );    
    }    
}



const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
}) 

export default connect(null, mapDispatchToProps)(ShopPage);