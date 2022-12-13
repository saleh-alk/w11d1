import {useState} from "react"


function Form(props) {

    const [userRegistration, setUserRegistration] = useState({
        name: "",
        email: "",
        phoneNumber: "", 
        phoneType: "",
        role: ""

    })

    const handleChange = (key) => {
        // setUserRegistration(e.target.value)
        return (e)=> {
            setUserRegistration( (user)=> ({...user, [key]: e.target.value}))

        }
        //console.log("Event Target: " + e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e.target[1].value)
        for (let i = 0; i < e.target.length; i++) {
            console.log(e.target[i].value)
        }
        // if(!userRegistration.name){
        //     console.error("No Name!")
        // }
        console.log("userRegistration: ")
        console.log(userRegistration)
    }

    return(
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange("name")} type="text" id="name" value={userRegistration.name} placeholder="Name"/>
            <input onChange={handleChange} type="text" id="email" value={userRegistration.email}  placeholder="Email"/>
            <input onChange={handleChange} type="text" id="phoneNumber" value={userRegistration.phoneNumber} placeholder="(123) 456-7890"/>

            <select onChange={handleChange} id="phoneType" name="phoneType" placeholder="Phone Type">
                <option value="" disabled selected>Phone Type</option>
                <option value="mobile">mobile</option>
                <option value="home">home</option>
                <option value="work">work</option>
            </select>

            <label>Staff
                <input  onChange={handleChange} type="radio" id="staff" name="role" value="staff"  />
            </label>
            <label>Student
                <input onChange={handleChange} type="radio" id="student" name="role" value="student"/>
            </label>
            <textarea onChange={handleChange} id="bio" placeholder="Describe who you are">
            </textarea>

            <label >Want email notifications?
                <input type="checkbox" id="emailNotifications" checked/>
            </label>

            <button type="submit">Submit</button>
        </form>
    )
}

export default Form;
