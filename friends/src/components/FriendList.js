import React, {useState, useEffect} from 'react'
import axiosAuth from '../utilities/axiosAuth';
import {FriendContext} from '../context/FriendContext';
import AddForm from './AddForm';

const FriendList = () => {
    const [friends, setFriends] = useState([]);
    const [editFriend,setEditFriend] = useState({});
    const [formState, setFormState] = useState({
        name: '',
        age:'',
        email: ''
    });

    useEffect(() =>{
        axiosAuth()
        .get("/friends")
        .then((res)=>{
            setFriends(res.data);
        })
        .catch((err)=>console.error(err.message));
    },[]);

     const deleteFriend = (id) => {
       axiosAuth()
         .delete(`/friends/${id}`)
         .then((res) => {
           setFriends(res.data);
           setFormState({
             name: "",
             age: "",
             email: "",
           });
         })
         .catch((err) => console.log(err));

         return (
            <FriendContext.Provider
             value={{
                 setFriends,
                 editFriend,
                 setEditFriend,
                 formState,
                 setFormState
             }}
              >
                <h2>Friend's List</h2>
                <div className="friendCard">
                    {friends.map((friend)=>{
                        return(
                            <div className='card' key={friend.id}>
                                 <div className='header'>{friend.name}</div>
                                <div className='details'>
                                     <p>Age: {friend.age}</p>
                                     <p>Email: {friend.email}</p>
                                </div>
                                <button onClick={()=>setEditFriend(friend)}>
                                     Edit Your Friend
                                </button>
                                <button onClick={()=>deleteFriend(friend.id)}>
                                     Delete Your Friend    
                                </button>
                            </div>
                        )
                    })}
                </div>
                <AddForm />
            </FriendContext.Provider>
            )
         }
     };

export default FriendList;  