import imageNote from './assets/images/noteCheckImg.svg'
import './SurveyFinished.css'
import Header from './Header.tsx'

const SurveyFinished = () => {
    return (
        <>
            <div>
                <Header />
                <div className='wholeContainer' id='containerWhole'> {/* Replace '#ADD8E6' with your desired color */}
                    <div className='imageDiv'>
                        <img src={imageNote} alt="Note" />
                    </div>
                    <div className='hoorayText'>
                        <p>Hooray!</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SurveyFinished;
