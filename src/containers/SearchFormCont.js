import {connect} from 'react-redux';
import SearchForm from '../components/SearchForm';
import {fetchData} from '../redux/actions';



const mapDispatchToProps = (dispatch) => ({
    searchToProps: (title) => dispatch(fetchData(title)),
})

export default connect(null, mapDispatchToProps)(SearchForm);