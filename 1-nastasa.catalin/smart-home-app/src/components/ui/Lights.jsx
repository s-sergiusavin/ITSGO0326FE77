import './Lights.scss'

function Lights({lightsOn}) {

    return <div className={`lights ${lightsOn ? 'yellow' : ''}`}></div>
}

export default Lights;