import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../axioswithAuth";
import axios from "axios";

import Friend from "./Friend";

const FriendsList = () => {
  const [friends, addFriends] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
        console.log("Data: ", res.data);
        addFriends(res.data);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Add Friend</h1>
      </div>
      <div>
        <h1>My Friends</h1>
        <p>These are my friends </p>
        {friends.map(friend => (
          <Friend
            key={friend.id}
            name={friend.name}
            age={friend.age}
            email={friend.email}
          />
        ))}
      </div>
    </>
  );
};

export default FriendsList;
