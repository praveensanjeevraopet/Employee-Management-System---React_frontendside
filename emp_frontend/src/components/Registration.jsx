import React, { useState } from 'react';

export const Registration = () => {
    const [data, setData] = useState({
        username: '',
        email: '',
        password: ''
    });

    // Destructuring
    const { username, email, password } = data;

    // OnChange to update the data
    const changeHandling = (e) => {
        const { name, value } = e.target; // Get name and value from the event target
        setData((prevData) => ({
            ...prevData,
            [name]: value // Use computed property name to update the right field
        }));
    };

    const submitform = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        console.log(data); // Log the current data state
    };

    return (
        <>
            <section style={{ height: '100vh' }}>
                <div>Registration</div>
                <form onSubmit={submitform}>
                    <div className='text-center'>
                        <div>
                            <label>Username</label>
                            <input
                                type="text"
                                name="username"
                                value={username}
                                placeholder='Enter your username'
                                onChange={changeHandling}
                            />
                        </div>
                        <br />
                        <div>
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder='Enter your email id'
                                onChange={changeHandling}
                            />
                        </div>
                        <br />
                        <div>
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                placeholder='Enter your password'
                                onChange={changeHandling}
                            />
                        </div>
                        <div>
                            <input type="submit" value="Submit" />
                        </div>
                    </div>
                </form>556
            </section>
        </>
    );
};

export default Registration;
