import './Homepage.css';

const HomePage = () => {
    return (<>
        <div className="home">
            <div className="div">
                {/* <div className="overlap-group">
          <p className="text-wrapper">Which Inside Out Character Are You?</p>
          <p className="p">Take the prediction test to find out!</p>
          <div className="overlap">
            <div className="text-wrapper-2">Take the test</div>
          </div>
        </div> */}
                <div className="overlap-2">
                    <div className="text-wrapper-3">Emotion Prediction Test</div>
                    <div className="text-wrapper-4">Inside Out</div>
                </div>

                <div className='blue-container'>
                <p className="text-wrapper-5">Which Inside Out Character Are You?</p>
                <p className="text-wrapper-6">Take the prediction test to find out!</p>
                </div>
        
                    
                
            </div>
        </div>
    </>);
}

export default HomePage;