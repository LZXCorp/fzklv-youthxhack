import '../assets/css/StepsProgressBar.css'
import Progress from './Progress'

function StepsProgressBar({ step, total_steps, className }) {
    const steps = [];
    for (let i = 1; i <= total_steps; i++) {
        steps.push(
            <div className={`${step >= i ? "circle active" : "circle"}`}>{i}</div>
        );
    }

    return (
        <div className={`steps-progress-bar ${className}`}>
            <div className="progress-container">
                <Progress total_steps={total_steps} steps={step}/>
                {steps}
            </div>
        </div>
    );
}

export default StepsProgressBar;