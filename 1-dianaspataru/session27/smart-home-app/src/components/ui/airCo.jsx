import './airCo.scss'

function Airco({acOn}){
    return <div className={`airco ${acOn ? 'blue': ''}`}></div>
}

export default Airco;