const SeedToBuy = (props) => {

    const handleClick = () => {
        props.handleSeedBuy(props.seed)
    }

    return (
        <div className="store-item">
            <h3>{props.seed.name}</h3>
            <h3>{props.seed.season}</h3>
            <p>{props.seed.description}</p>
            <h3>{props.seed.growth_period}</h3>
            <h3>{props.seed.price}</h3>
            <button onClick={handleClick}>Buy</button>
        </div>
    )
}

export default SeedToBuy;