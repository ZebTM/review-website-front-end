function Review( props ) {
    let reviewText = props.reviewText;

    return (
        <li className="review">
            { reviewText }
        </li>
    )
}

export default Review;