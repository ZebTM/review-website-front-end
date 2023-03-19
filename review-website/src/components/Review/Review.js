function Review( props ) {
    let reviewText = props.reviewText;

    return (
        <li>
            { reviewText }
        </li>
    )
}

export default Review;