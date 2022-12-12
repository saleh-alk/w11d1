

function Form(props) {
    return(
        <form>
            <input type="text" id="name" value="name"/>
            <input type="text" id="email" value="email"  />
            <input type="text" id="phoneNumber" value="phoneNumber" />

            <select id="phoneType" value="phoneType">
                <option selected></option>
                <option  value="mobile">mobile</option>
                <option value="home">home</option>
                <option value="work">work</option>
            </select>

            <label>Staff
                <input type="radio" id="staff" value="staff"  />
            </label>
            <label>
            <input type="radio" id="student" value="student"/>
            </label>
            <textarea id="bio" >bio</textarea>
            <input type="checkbox" id="emailNotifications" checked/>
        </form>
    )
}

export default Form;