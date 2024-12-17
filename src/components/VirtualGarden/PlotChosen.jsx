import { Link } from "react-router-dom"

const PlotChosen = (props) => {

    const handleDeleteClick = () => {
        props.handleDelete(props.plot.id)
    }

    return (
        <div className="user-plot">
            <h3>{props.plot.name}</h3>
            <Link to='/'>
                <button onClick={handleDeleteClick}>Sell</button>
            </Link>
        </div>
    )
}

export default PlotChosen;