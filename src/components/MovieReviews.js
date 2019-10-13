// Code MovieReviews Here

import React from 'react';


const Review = props => {
    return (
        <div>
               {props.headline}
        </div>
    )
}

//review class name needs to be in here otherwise tests don't pass (even though it does show as rendering)
const MovieReviews = props => {
    return (
        <div className="review-list">{props.reviews.map(review=> <div className="review"><Review key={review.display_title} headline={review.headline}/></div> )}</div>
    )
}



export default MovieReviews
