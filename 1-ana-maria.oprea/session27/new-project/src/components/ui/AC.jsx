import './AC.scss'

function AC({acOn}) {

    return <div className={`AC ${acOn ? 'blue' : ''}`}></div>
}

export default AC;