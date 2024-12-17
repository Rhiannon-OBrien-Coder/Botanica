const PlotToBuy = (props) => {

    const handleClick = () => {
        props.handlePlotBuy(props.plot)
    }

    return (
        <div className="store-item">
            <h3>{props.plot.name}</h3>
            <h3>{props.plot.season}</h3>
            <p>{props.plot.description}</p>
            <h3>{props.plot.price}</h3>
            <button onClick={handleClick}>Buy</button>
        </div>
    )
}

export default PlotToBuy;