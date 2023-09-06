import { useState, useEffect } from 'react';
import Header from './components/Header';
import Reviews from './data';
import Review from "./components/Review"
import './App.css';

function App() {
  const [index, setIndex] = useState(0)
  const [reviews, setReviews] = useState(Reviews)
  const [review, setReview] = useState(reviews[index])

  

  const changeReview = (direction) => {
    if (direction === "right") {
      if (index === reviews.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    } else {
      if (index === 0) {
        setIndex(reviews.length - 1);
      } else {
        setIndex(index - 1);
      }
    }
  }


  useEffect(() => {
    setReview(reviews[index]);
  }, [index, reviews]);

  


  return (
    <div className="App">
      <Header />
      <Review changeReview = {changeReview} review={review}/>
    </div>
  );
}

export default App;
