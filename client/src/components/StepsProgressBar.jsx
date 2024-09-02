import '../assets/css/StepsProgressBar.css'

function StepsProgressBar({ step }) {
    return (
        <div className="steps-progress-bar">
            <div className="progress-container">
                <div className="progress"></div>
                <div className="circle">1</div>
                <div className="circle">2</div>
                <div className="circle">3</div>
            </div>
        </div>
    );
}

export default StepsProgressBar;