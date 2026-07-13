import './Ac.scss'

function Ac({acOn}) {

    return <div className={`ac ${acOn ? 'blue' : ''}`}></div>
}

export default Ac;