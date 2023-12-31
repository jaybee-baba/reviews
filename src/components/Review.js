import React from 'react'


const NameList = ({ review, changeReview, generateRandom }) => {

  const { id, name, job, image, text } = review

  const  capitalizeFirstLetters = (inputString) => {
    const words = inputString.split(' ');
    const capitalizedWords = words.map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(' ');
  }




return (
  <div className='review'>
    <div className='image'>
      <img src={image} alt="name" />
      <i className="fas fa-quote-right"></i>
    </div>

    <div>
      <p className='name'>{capitalizeFirstLetters(name)}</p>
      <p className='job'>{job.toUpperCase()}</p>
    </div>

    <p className='text'>{text}</p>

    <div className='icons'>
      <i onClick={()=>changeReview("left")} className="fas fa-angle-left"></i>
      <i onClick={()=>changeReview("right")} className="fas fa-angle-right"></i>
    </div>

    <button onClick = {generateRandom}> Surprise Me</button>
  </div>
)
}

export default NameList