import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../slices/userSlice";

function User() {
  const users = useSelector((state) => state.userInfo.users);
  const dispatch=useDispatch()
  console.log(users);
  const deleteUserInfo=(index)=>{
    dispatch(deleteUser(index))
  }
  return (
    <div>
      {users?.map((user, index) => {
        return (
          <div key={index}>
            <h1>{user.name}</h1>
            <h2>{user.age}</h2>
            <h3>{user.email}</h3>

            <h4>{user.contact}</h4>
            <button onClick={()=>deleteUserInfo(index)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}

export default User;
