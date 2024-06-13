import imageNote from './assets/images/noteCheckImg.svg'
import './SurveyFinished.css'

const SurveyFinished = () => {
    return (
        <>
            <div className='wholeContainer' id='containerWhole'> {/* Replace '#ADD8E6' with your desired color */}
                <div className='imageDiv'>
                    <img src={imageNote} alt="Note" />
                </div>
                <div className='hoorayText'>
                    <p>Hooray!</p>
                </div>
            </div>
        </>
    );
}

export default SurveyFinished;
