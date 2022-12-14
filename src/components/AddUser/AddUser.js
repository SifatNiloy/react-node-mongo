import React from 'react';

const AddUser = () => {
    const handleAddUser = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };


        //send data to the server

        fetch('http://localhost:5000/user', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                alert('user added successfully');
                event.target.reset();
            })
    }
    return (
        <div>
            <h1>Please Add a new user: </h1>
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder='name' id="" required />
                <br />
                <input type="email" name="email" placeholder='email' id="" required />
                <br />
                <input type="submit" value="submit" placeholder='add user' required />
            </form>
        </div>
    );
};

export default AddUser;