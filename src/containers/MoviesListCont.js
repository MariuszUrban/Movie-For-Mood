import {connect} from 'react-redux';
import MoviesList from '../components/Home/MoviesList';

const mapState = (state) => {
    console.log('movies list', state)
    return {
        moviesArray: state.movies,
        loading: state.loading
    }
}



export default connect(mapState)(MoviesList);