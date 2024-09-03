import { useState } from 'react'
import StepsProgressBar from '../components/StepsProgressBar'
import '../assets/css/Onboarding.css'

function Onboarding() {
    const [currStep, setCurrStep] = useState(1)

    // name, date of brith, gender, prefeered langauges, disabilities, phohne nunber, next-of-kin phone no

    return (
        <div className="content-div">
            <h1>Onboarding</h1>
            <StepsProgressBar className='onboard-progress-container' step={currStep} total_steps={5} />

            <div className='onboard-step onboard-step1'>

            </div>
            
            <div className='onboard-step onboard-step2'>
                
            </div>

            <div className='onboard-step onboard-step3'>
                
            </div>

            <div className='onboard-step onboard-step4'>
                
            </div>

            <button onClick={() => setCurrStep(currStep + 1)}>Next</button>
        </div>
    )
}

export default Onboarding
