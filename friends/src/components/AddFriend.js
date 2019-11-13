import React, {useState} from 'react';
import {axiosWithAuth} from "../auth/axiosAuth";

const AddFriend = (props) => {
    const [newFriend, setNewFriend] = useState({
        name: "",
        age: 0,
        email: ""
    })

    const changeHandler = e => {
        setNewFriend({
            ...newFriend, 
            [e.target.name]: e.target.value
        });
    }

    const submitHandler = e => {
        e.preventDefault();
        //console.log(newFriend)

        axiosWithAuth()
            .post("/api/friends", newFriend)
            .then(res => {
                console.log(res.data)
                props.setFriends(res.data)
            })
            .catch(err => console.log(err.response))
    }

    return(
        <div>
            <h2>Add New Friend</h2>
            <form onSubmit={submitHandler}>
                <input type="text" name="name" placeholder="Name" onChange={changeHandler} />

                <input type="text" name="age" placeholder="Age" onChange={changeHandler} />

                <input type="text" name="email" placeholder="Email" onChange={changeHandler} />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default AddFriend;