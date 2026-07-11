import './AC.scss'

function Ac({ACOn}) {

    return <div className={`Ac ${ACOn ? 'red' : ''}`}></div>
}

export default AC;