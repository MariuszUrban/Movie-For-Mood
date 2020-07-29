import {connect} from 'react-redux';
import MoviesList from '../components/MoviesList';

const mapState = (state) => {
    console.log(state.movies, '?')
    return {
        moviesArray: state.movies,
        loading: state.loading
    }
}



export default connect(mapState)(MoviesList);