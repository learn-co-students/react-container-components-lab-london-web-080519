import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component {
  state = { reviews: [], searchTerm: "" };

  handleInput = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmission = event => {
    event.preventDefault();
    return fetch(`${URL}&query=${this.state.searchTerm}`)
      .then(resp => resp.json())
      .then(reviews => this.setState({ reviews: reviews.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmission}>
          <input
            type="text"
            onChange={this.handleInput}
            value={this.state.searchTerm}
          />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
