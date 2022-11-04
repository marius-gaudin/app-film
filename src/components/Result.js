import React from 'react'
import axios from 'axios'
import Movie from './Movie';

class Result extends React.Component {

    state = {
        results: null
    }

    componentDidUpdate(prevProps) {
        if(prevProps.search !== this.props.search && this.props.search !== null) {
            const apiUrl = "https://api.themoviedb.org/3/search/movie?api_key=ea117c0c136a64a2f5e954a0b085bb3f&language=fr-FR&page=1&include_adult=false&query=";
            axios(apiUrl+this.props.search)
            .then((response) => {
                console.log(response.data.results);
                this.setState({
                    results: response.data.results
                });
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }

    render() {
        if(this.props.search === null) {
            return (<div></div>);
        } else {
            return (
                <div className="container">
                    <div className="row">
                        {this.state.results ? this.state.results.map((movie) => <Movie movie={movie} key={movie.id} />) : 'chargement'}
                    </div>
                </div>
            );
        }
    }

}

export default Result;
