import {connect} from 'react-redux';
import {compose} from 'redux';
import {createStructuredSelector} from 'reselect';
import {selectIsCollectionsFetching} from '../../redux/shop/shop.selectors';

import CollectionOverview from '../collection-overview/collection-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';

const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
})

// const CollectionOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionOverview))

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;