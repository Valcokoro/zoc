import { useState } from 'react';


function Form(){
    const [name, setName] = useState();
    return (
        <div>
            <form>
                <input 
                placeholder="First Name"
                type="text"
                value={name}
                required
                onChange= {(e) => setName(e.target.value)}
                />
                <input 
                placeholder="Last Name"
                type="text"
                value={name}
                required
                onChange= {(e) => setName(e.target.value)}
                />
                <input 
                placeholder="Email Address"
                type="email"
                value={name}
                required
                onChange= {(e) => setName(e.target.value)}
                />
                <input 
                placeholder="Phone Number"
                type="tel"
                pattern="^\+?[1-9]\d{1,14}$"
                value={name}
                required
                onChange= {(e) => setName(e.target.value)}
                />
                <input 
                placeholder="Create a password"
                type="password"
                required
                value={name}
                minlength="8"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                title="Password must be at least 8 characters long and include uppercase, lowercase, number, and special character"
                onChange= {(e) => setName(e.target.value)}
                />
            </form>

        </div>
    )
}


export default Form;