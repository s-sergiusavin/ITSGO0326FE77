import './Ac.scss'

function Ac({acOn}) {

    return <div className={`AC ${acOn ? 'blue' : ''}`}></div>
}

export default Ac;