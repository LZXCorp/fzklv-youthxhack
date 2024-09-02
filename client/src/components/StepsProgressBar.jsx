import '../assets/css/StepsProgressBar.css'

function StepsProgressBar({ step, total_steps }) {
    const steps = [];
    for (let i = 1; i <= total_steps; i++) {
        steps.push(
            <div className={`${step >= i ? "circle active" : "circle"}`}>{i}</div>
        );
    }

    return (
        <div className="steps-progress-bar">
            <div className="progress-container">
                <div className="progress"></div>
                {steps}
            </div>
        </div>
    );
}

export default StepsProgressBar;