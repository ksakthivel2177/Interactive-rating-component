import { useState } from 'react';
import star from './assets/images/icon-star.svg';
import thankyou from './assets/images/illustration-thank-you.svg';

function App() {
  const [selectedRating, setSelectedRating] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleSubmit = () => {
    if (selectedRating) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      {!isSubmitted ? (
        <div className="bg-[#252d37] rounded-2xl p-6 md:p-8 max-w-sm w-full">
          <div className="bg-gray-800 rounded-full w-10 h-10 flex items-center justify-center mb-6">
            <img src={star} alt="Star icon" className="w-4 h-4" />
          </div>
          
          <h1 className="text-white text-2xl font-medium mb-3">How did we do?</h1>
          
          <p className="text-gray-400 text-sm mb-6">
            Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
          </p>
          
          <div className="flex justify-between mb-6">
            {[1, 2, 3, 4, 5].map((rating) => (
              <button
                key={rating}
                onClick={() => handleRatingClick(rating)}
                className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-colors ${
                  selectedRating === rating 
                    ? 'bg-orange-500 text-white' 
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {rating}
              </button>
            ))}
          </div>
          
          <button
            onClick={handleSubmit}
            className="w-full bg-orange-500 hover:bg-white hover:text-[#121417] text-[#121417] uppercase tracking-wider py-3 rounded-full font-medium transition-colors duration-200"
          >
            Submit
          </button>
        </div>
      ) : (
        <div className="bg-gray-900 rounded-2xl p-6 md:p-8 max-w-sm w-full text-center">
          <div className="flex justify-center mb-6">
            <img src={thankyou} alt="Thank you illustration" className="h-24 md:h-28" />
          </div>
          
          <div className="bg-gray-800 rounded-full px-4 py-1 text-orange-500 text-sm inline-block mb-6">
            You selected {selectedRating} out of 5
          </div>
          
          <h1 className="text-white text-2xl font-medium mb-4">Thank you!</h1>
          
          <p className="text-gray-400 text-sm md:px-4">
            We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
          </p>
        </div>
      )}
    </div>
  );
}

export default App;