import'./feature.scss'

function Feature({name,action, toggleAction}){

function featureButtonHandler(){
    toggleAction(name)
}

    return(
        <div className="feature">
            <h2>{name}</h2>
            <button onClick={featureButtonHandler}>{action}</button>
            
        </div>
    )
}

export default Feature