import { useState } from 'react'
import StepsProgressBar from '../components/StepsProgressBar'

function Onboarding() {
    const [currStep, setCurrStep] = useState(1)

    return (
        <div>
            <div className="content-div">
                <h1>Onboarding</h1>
                <StepsProgressBar step={currStep} total_steps={5} />
            </div>

            <button onClick={() => setCurrStep(currStep + 1)}>Next</button>
        </div>
    )
}

export default Onboarding
