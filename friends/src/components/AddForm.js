import React, {useContext, useState, useEffect} from 'react';
import * as yup from 'yup';
import axiosAuth from './utilities/axiosAuth';
import {FriendContext} from './context/FriendContext';

const AddForm = () => {
    const [setFriends, editFriend, formState, setFormState] = useContext(
        FriendContext
    );

    const [err, setErr] = useState({
        name: '',
        age: '',
        email: ''
    });

    const [buttonDisabled, setButtonDisabled] = useState(true);

    const formSetup = yup.object(shape({
        name: yup.string().required('Friend name is required'),
        age: yup.number().required('Friend age is required'),
        email: yup.string().required('Friend email is required')
    }));

    const validateChanges = (e) => {
        yup
        .reach(formSetup, e.target.name)
        .validate(e.target.value)
        .then((valid) => {
            setErr({...err, [e.target.name]: ''})
        })
        .catch((err) => setErr({...err, [e.target.name]: err:errs[0]});
    };

    useEffect(() => {
        formSetup.isValid(formState).then((valid) => {
            setButtonDisabled(!valid);
        });
    }, [formState]);

    useEffect(() => {
        if (editFriend) {
            setFormState(editFriend);
        }
    }, [editFriend]);

    const addFriend = (friend) => {
        if (friend.id){
            axiosAuth()
            .post('/frineds/${friend.id}', friend)
            .then((res) => {
                setFriends(res.data);
            })
            .catch((err) => {
                console.log(err)
            });    
        } else {
            axiosAuth()
            .post('/friends', friend)
            .then((res) => {
                setFriends(res.data);
            })
            .catch((err) => {
                console.log(err)
            });
        }
    };

    const submitForm = (e) => {
        e.preventDefault();
        addFriend(formState);
        setFormState({
            name: '',
            age: '',
            email: '',
        });
    };

    const changeInput = e => {
        e.persist();
        const newData = {
            ...formState,
            [e.target.name]: e.target.value
        };
        validateChanges(e);
        setFormState(newData);
    };

    return (
        <div>
            <h3>Add Friend</h3>
            <form onSubmit={submitForm}>
                <label>
                    Name 
                    <input
                    type='text'
                    name='name'
                    onChange={changeInput}
                    value={formState.name}
                />
                </label>
                <label htmlFor='age'>
                    Age
                    <input
                    type='number'
                    name='age'
                    onChange={changeInput}
                    value={formState.age}
                    />
                </label>
                <label htmlFor='email'>
                    <input
                        type='email'
                        name='email'
                        onChange={changeInput}
                        value={formState.email}
                    />
                </label>
                <button disabled={buttonDisabled}
                type='submit'>
                    Add Friend
                </button>
            </form>
        </div>
    )
};

export default AddForm; 