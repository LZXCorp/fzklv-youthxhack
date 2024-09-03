import { useState } from 'react'
import StepsProgressBar from '../components/StepsProgressBar'
import '../assets/css/Onboarding.css'

function Onboarding() {
    const [currStep, setCurrStep] = useState(1)
    const today = new Date().toISOString().split('T')[0]

    const storeOnboardingStatus = () => {
        localStorage.setItem('onboarded', 'true')
        window.location.reload()
    }

    const [selectedEng, setSelectedEng] = useState(false)
    const [selectedCn, setSelectedCn] = useState(false)

    return (
        <div className="content-div">
            <h1>Onboarding</h1>
            <StepsProgressBar
                className="onboard-progress-container"
                step={currStep}
                total_steps={5}
            />

            <div
                className={`onboard-step onboard-step1 ${currStep == 1 ? '' : 'onboard-hidden'}`}
            >
                <div className="onboard-container">
                    <h1>Preferred Languages</h1>
                    <h3>Choose from one or more of the following Boxes</h3>

                    <div className="box-container">
                        <button
                            className={`box ${selectedEng ? 'selected' : ''}`}
                            onClick={() => setSelectedEng(!selectedEng)}
                        >
                            <p>English</p>
                        </button>
                        <button
                            className={`box ${selectedCn ? 'selected' : ''}`}
                            onClick={() => setSelectedCn(!selectedCn)}
                        >
                            <p>简体中文</p>
                        </button>
                    </div>

                    <button
                        className="onboard-continue"
                        onClick={() => setCurrStep(currStep + 1)}
                    >
                        Continue
                    </button>
                </div>
            </div>

            <div
                className={`onboard-step onboard-step2 ${currStep == 2 ? '' : 'onboard-hidden'}`}
            >
                <div className="onboard-container">
                    <h1>Personal Information</h1>
                    <h3>Fill in all the details on the form</h3>

                    <div className="onboard-input">
                        <p>Name</p>
                        <input type="text" />
                    </div>

                    <div className="onboard-input">
                        <p>Date Of Birth</p>
                        <input type="date" defaultValue={today} />
                    </div>

                    <div className="onboard-input">
                        <p>Gender</p>
                        <select>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="onboard-input">
                        <p>Phone Number</p>
                        <input type="text" />
                    </div>
                    <button
                        className="onboard-return"
                        onClick={() => setCurrStep(currStep - 1)}
                    >
                        Return
                    </button>
                    <button
                        className="onboard-continue"
                        onClick={() => setCurrStep(currStep + 1)}
                    >
                        Continue
                    </button>
                </div>
            </div>

            <div
                className={`onboard-step onboard-step3 ${currStep == 3 ? '' : 'onboard-hidden'}`}
            >
                <div className="onboard-container">
                    <h1>Medical Conditions and Disability</h1>
                    <h3>Fill in all the details on the form</h3>

                    <div className="onboard-input">
                        <p>Medical Conditions</p>
                        <input type="text" />
                    </div>

                    <div className="onboard-input">
                        <p>Disabilities</p>
                        <input type="text" />
                    </div>

                    <button
                        className="onboard-return"
                        onClick={() => setCurrStep(currStep - 1)}
                    >
                        Return
                    </button>
                    <button
                        className="onboard-continue"
                        onClick={() => setCurrStep(currStep + 1)}
                    >
                        Continue
                    </button>
                </div>
            </div>

            <div
                className={`onboard-step onboard-step4 ${currStep == 4 ? '' : 'onboard-hidden'}`}
            >
                <div className="onboard-container">
                    <h1>Close Contact</h1>
                    <h3>Fill in all the details on the form</h3>

                    <div className="onboard-input">
                        <p>Next-of-kin Phone Number</p>
                        <input type="text" />
                    </div>

                    <button
                        className="onboard-return"
                        onClick={() => setCurrStep(currStep - 1)}
                    >
                        Return
                    </button>
                    <button
                        className="onboard-continue"
                        onClick={() => setCurrStep(currStep + 1)}
                    >
                        Continue
                    </button>
                </div>
            </div>

            <div
                className={`onboard-step onboard-step4 ${currStep == 5 ? '' : 'onboard-hidden'}`}
            >
                <div className="onboard-finish-container">
                    <h1>Successful Onboarding!</h1>
                    <h2>You may continue to the Events</h2>

                    <button
                        className="onboard-finish-button"
                        onClick={storeOnboardingStatus}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Onboarding
