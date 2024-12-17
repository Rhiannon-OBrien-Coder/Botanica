import { Link } from "react-router-dom"
import { useState } from "react"

const PlotChosen = (props) => {
    const [isFormVisible, setIsFormVisible] = useState(false)
    const [formData, setFormData] = useState({
        name: `${props.plot.name}`,
        type: `${props.plot.type}`
      })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleDeleteClick = () => {
        props.handleDelete(props.plot.id)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.handleUpdate(props.plot.id, formData)
        if (isFormVisible == true) {
            setIsFormVisible(false)
        } else {
            setIsFormVisible(true)
        }
      }

    const handleToggle = (e) => {
        e.preventDefault()
        if (isFormVisible == true) {
            setIsFormVisible(false)
        } else {
            setIsFormVisible(true)
        }
    }

    return (
        <div className="user-plot">
            {isFormVisible ? 
            <form>
                <label htmlFor="name">Name:</label>
                <input defaultValue={props.plot.name} onChange={handleChange}></input>
                <p>Plot type: {props.plot.type}</p>
                <button onClick={handleSubmit}>Save Changes</button>
                <button onClick={handleToggle}>Cancel</button>
            </form>
            : <>
                <h3>{props.plot.name}</h3>
                <p>Plot type: {props.plot.type}</p>
                <button onClick={handleToggle}>Change Name</button>
            </>
            }
            <Link to='/'>
                <button onClick={handleDeleteClick}>Sell</button>
            </Link>
        </div>
    )
}

export default PlotChosen;