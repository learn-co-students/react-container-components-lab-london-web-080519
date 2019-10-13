import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
//             + `api-key=${NYT_API_KEY}`;

//note the provided above does not work - have to add &query= as below (on readme)
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;           


// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    //controlled forms - check: does state need to be declared in constructor?
    constructor(props) {
        super(props)
        this.state= {
            reviews: [],
            searchTerm: ''
        }
    }


    //the below only worked when set up as an arrow function
    handleSubmit = event => {
        event.preventDefault();
    //use concat rather than interpolation - check this. affect how it's interpolated?
        fetch(URL.concat(this.state.searchTerm))
        .then(response=> response.json())
        .then(reviews => this.setState( {reviews: reviews.results} ) )

    }

    //the below only works when set up as an arrow function
    handleTextChange = event => {
        this.setState({
            searchTerm: event.target.value
        })
    }

    render() {
        return (
            <div className="searchable-movie-reviews">
                <p>searchable container</p>
                <form onSubmit={this.handleSubmit}>
                    <input id="search-term" type="text" onChange={this.handleTextChange} value={this.state.searchTerm}></input>
                    <button type="submit">Submit</button>
                </form>

                <MovieReviews reviews= {this.state.reviews} />
            </div>
        )
    }

}