import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if(error) {
      alert("something went wrong");
    }
    if(loading) {
      alert("loading")
    }
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <div>
      {" "}
      {users.map((val) => {
        return <h1> {val.firstName}</h1>;
      })}
    </div>
  );
}

export default GetUsers;
