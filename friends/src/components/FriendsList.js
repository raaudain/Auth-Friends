import React from 'react';
import {axiosWithAuth} from "../auth/axiosAuth";

const FriendsList = (props) => {

    // const [friends, setFriends] = useState([]);

    // useEffect(() => {
    //     axiosWithAuth()
    //         .get("/api/friends")
    //         .then(res => {
    //             console.log("axios", res.data)
    //             const listFriends = res.data;
    //             setFriends(...friends, listFriends)
                
    //         })
            
    //         .catch(err => console.log(err.response))
    // },[]);

    //console.log("friends",friends)
    

    return(
        <div>
            <h1>My Friends</h1>
            {props.friends.map(friend => (
                <div>
                    <p>Name: {friend.name} --> Age: {friend.age} --> Email: {friend.email}</p>
                </div>              
            ))}
        </div>
    )
}

export default FriendsList;