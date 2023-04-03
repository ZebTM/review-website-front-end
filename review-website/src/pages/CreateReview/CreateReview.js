import Review from '../../components/Review/Review.js';
import React, { useState } from 'react';
import './CreateReview.css';

function CreateReview( props ) {
    const [ input, setInput ] = useState("");
    const [reviewList, setReviewList ] = useState([]);

    const handleClick = () => {
        if (input.length === 0) {
            return;
        }
        const id = reviewList.length + 1;
        setReviewList( ( prev ) => [
            ...prev,
            {
                id: id,
                reviewText: input
            },
        ]);
        setInput("");
    }

    return (
        <div className="CreateReview">
            <h1> Create your review!</h1>
            <textarea className='textInput' value={input} onChange={ (e) => setInput(e.target.value) } />
            <button onClick={ () => handleClick() }>Submit</button>
            <ul>
                {reviewList.map(( review ) => { 
                    return (
                        <Review id={review.id} reviewText={review.reviewText} />
                    )
                } ) }
            </ul>
        </div>
    )
}   

export default CreateReview;
