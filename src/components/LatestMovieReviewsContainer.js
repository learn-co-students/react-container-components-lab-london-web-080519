import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
    state= {
        reviews: []
    }

    get(url) {
        return fetch(url).then(response=> response.json())
    }

    //place this in component did mount (as non-arrow function otherwise tests don't pass - check why) 
    // so it renders once the container is up
    componentDidMount() {
        this.get(URL).then(reviews => this.setState( {reviews: reviews.results} ) )
    }

    render() {
        return(
            <div className="latest-movie-reviews">
                <p>Latest movies</p>
                <MovieReviews reviews= {this.state.reviews} />
            </div>
        )
    }
}