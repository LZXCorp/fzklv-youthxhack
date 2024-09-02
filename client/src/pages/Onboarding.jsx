import { useState } from 'react'
import StepsProgressBar from '../components/StepsProgressBar';

function Onboarding() {
    const [currStep, setCurrStep] = useState(1)

    return (
        <div className="content-div">
            <h1>Onboarding</h1>
            <StepsProgressBar step={currStep} total_steps={3} />
        </div>
    )
}

export default Onboarding
