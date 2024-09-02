import { useState } from 'react'
import { getCurrentSelectedLanguage } from '../../utils'

export default function Text({ english, chinese }) {
    // Destructure the state value from the useState hook
    const [language] = useState(getCurrentSelectedLanguage())

    return <>{language === 'English' ? <>{english}</> : <>{chinese}</>}</>
}
