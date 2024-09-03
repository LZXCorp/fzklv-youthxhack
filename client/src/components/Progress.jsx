function Progress({ steps, total_steps }) {
    console.log(steps)
    console.log(total_steps)

    const progress = ((steps - 1) / (total_steps - 1)) * 100;

    return (
        <div
            className="progress"
            style={{
                height: '4px',
                width: '100%',
                background: '#ddd',
                transition: 'all 0.4s ease-in',
            }}
        >
            <div
                style={{
                    height: '4px',
                    width: `${progress}%`,
                    background: '#45a065',
                    transition: 'all 0.4s ease-in',
                }}
            ></div>
        </div>
    )
}

export default Progress
