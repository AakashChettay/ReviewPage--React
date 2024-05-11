import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewId: 0}

  moveLeft = () => {
    const {reviewId} = this.state
    if (reviewId > 0) {
      this.setState({reviewId: reviewId - 1})
    }
  }

  moveRight = () => {
    const {reviewId} = this.state
    const {reviewsList} = this.props
    if (reviewId < reviewsList.length - 1) {
      this.setState({reviewId: reviewId + 1})
    }
  }

  render() {
    const {reviewsList} = this.props
    const {reviewId} = this.state
    const isFirstReview = reviewId === 0
    const isLastReview = reviewId === reviewsList.length - 1

    return (
      <div className="bgContainer">
        <h1 className="heading">Reviews</h1>
        <img
          className="profilePic"
          src={reviewsList[reviewId].imgUrl}
          alt={reviewsList[reviewId].username}
        />
        <div className="directionAndNameRowContainer">
          <button
            data-testid="leftArrow"
            onClick={this.moveLeft}
            type="button"
            className="directionBtn"
            disabled={isFirstReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="directionImg"
            />
          </button>
          <p className="name">{reviewsList[reviewId].username}</p>
          <button
            data-testid="rightArrow"
            onClick={this.moveRight}
            type="button"
            className="directionBtn"
            disabled={isLastReview}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="directionImg"
            />
          </button>
        </div>
        <div className="reviewContainer">
          <p className="titleOfReview">{reviewsList[reviewId].companyName}</p>
          <p className="review">{reviewsList[reviewId].description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
