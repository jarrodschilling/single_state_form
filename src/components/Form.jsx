import { useState } from "react"

const Form = (props) => {
    const [formList, setFormList] = useState([])
    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPW: ""
    })

    const handleChange = (e) => {
        let newValue = e.target.value

        setFormState((prevState) => ({
            ...prevState,
            [e.target.name]: newValue
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        let newUser = {...formState}
        setFormList((prevFormList)=>[...prevFormList, newUser])
        setFormState({
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPW: ""
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input name="firstName" id="firstName" type="text" value={formState.firstName} onChange={handleChange} />
                <label htmlFor="lastName">Last Name:</label>
                <input name="lastName" id="lastName" type="text" value={formState.lastName} onChange={handleChange} />
                <label htmlFor="email">Email:</label>
                <input name="email" id="email" type="text" value={formState.email} onChange={handleChange} />
                <label htmlFor="password">Password:</label>
                <input name="password" id="password" type="password" value={formState.password} onChange={handleChange} />
                <label htmlFor="confirmPW">Confirm Password:</label>
                <input name="confirmPW" id="confirmPW" type="password" value={formState.confirmPW} onChange={handleChange} />
                <button>Submit</button>
            </form>
            {
                formList.map((obj, index)=>
                <div key={index}>
                    <p>{obj.firstName}</p>
                    <p>{obj.lastName}</p>
                    <p>{obj.email}</p>
                    <p>{obj.password}</p>
                    <p>{obj.confirmPW}</p>
                </div>
                )
            }
        </div>
    )
}

export default Form