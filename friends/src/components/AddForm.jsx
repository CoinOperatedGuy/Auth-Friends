import React, { useState } from 'react';
import { addFriend } from './../utils/actions';

const AddForm = ({ id, setFriends }) => {
    const initialState = { name: '', age: '', email: '', id: id };
    const [input, setInput] = useState(initialState);

    const insertFriend = friend => {
        addFriend(friend)
            .then(res => {
                setFriends(res.data);
            })
            .catch(err => console.error(err.response));
    };

    const handleChange = e => {
        e.preventDefault();
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        insertFriend(input);
        setInput(initialState);
        e.target.reset();
    };

    return (
        <form>
            <h2>Add a Friend</h2>
            <Input 
                name='name'
                value={input.name}
                placeholder='Name'
                onChange={handleChange}
            />
            <Input
                name='name'
                value={input.age}
                placeholder='Age'
                onChange={handleChange}
            />
            <Input 
                name='email'
                value={input.email}
                placeholder='Email'
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    );
}

export default AddForm;