import Review from '../../components/Review/Review.js';

function CreateReview( props ) {
    return (
        <div className="CreateReview">
            <h1> Create your review!</h1>
            <form>
                <input
                    type="text"
                    id="new-review-input"
                    className="input"
                    name="text"
                    autoComplete="off"    
                />
                <button type="submit" className="btn" onClick={() => alert("You clicked the button")}>
                    Submit
                </button>
            </form>
            <ul>
                <Review reviewText="test1" />
                <Review reviewText="test2" />
                <Review reviewText="test3" />
            </ul>
        </div>
    )
}   

export default CreateReview;
