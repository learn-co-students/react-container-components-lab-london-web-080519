// Code MovieReviews Here

import React from 'react';


const Review = props => {
    return (
        <div>
               {props.headline}
        </div>
    )
}


const MovieReviews = props => {
    return (
        <div className="review-list">{props.reviews.map(review=> <div className="review"><Review key={review.display_title} headline={review.headline}/></div> )}</div>
    )
}



export default MovieReviews
