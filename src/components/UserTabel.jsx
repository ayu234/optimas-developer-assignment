import React, { useEffect, useState } from "react";

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <div className="container">
      <h1 className="text-white mb-3">Admin</h1>
      <button
        type="button"
        class="btn btn-primary color-primary text-dark border-0 rounded-0 me-3 px-5"
      >
        Users
      </button>
      <button
        type="button"
        class="btn btn-secondary background-sec border-0 rounded-0 px-5"
      >
        User Groups
      </button>
      <div className="d-flex align-items-center my-4">
        <div className="me-3">
          <div className="bg-shadow">
            <div className=" py-2 px-4">
              <img src="/images/book.svg" className="icn me-2" alt="Arrow" />{" "}
              <span className="text-white">Definitions -350</span>
            </div>
            <div className="button-grad"></div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <img src="/images/tick.svg" className="icn me-2" alt="Arrow" />{" "}
          <span className="text-white">Pending</span>
        </div>
      </div>
      <table className="text-white table-style">
        <thead className="tr-bg">
          <tr>
            <th className="d-flex justify-content-between">
              ID
              <span>
                <img src="/images/arrow.svg" className="ic pe-4" alt="Arrow" />
                <img src="/images/edit.svg" className="ico" alt="Edit" />
              </span>
            </th>
            <span className="user-bg"></span>
            <th>
              Name
              <span className="float-end">
                <img src="/images/arrow.svg" className="icn  pe-4" alt="Arrow" />
                <img src="/images/edit.svg" className="icon" alt="Edit" />
              </span>
            </th>
            <th>
              Username
              <span className="float-end">
              <img src="/images/arrow.svg" className="icn pe-4" alt="Arrow" />
              <img src="/images/edit.svg" className="icon" alt="Edit" />
              </span>
            </th>
            <th>
              Email
              <span className="float-end">
              <img src="/images/arrow.svg" className="icn pe-4" alt="Arrow" />
              <img src="/images/edit.svg" className="icon" alt="Edit" />
              </span>
            </th>
            <th className="pe-5">
              Phone Number
              <span className="float-end">
              <img src="/images/arrow.svg" className="ion pe-4" alt="Arrow" />
              <img src="/images/edit.svg" className="icon" alt="Edit" />
              </span>
            </th>
          </tr>
        </thead>
        <tr>
             
              {Array.from({ length: 5 }).map((_, index) => (
                <td className="pe-0 ps-0 py-1"  key={index}>
                  <div className={`bg-td ${index !== 4 ? 'me-2' : ''}`}> 
                <img src="/images/search.svg" className="ps-2 py-1  " alt="Arrow" /> 
                </div>
                </td>
              ))}
            </tr>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="bg-tr">
              <td>
                {" "}
                <img
                  src="/images/arrow.svg"
                  className="icn w-10 me-4"
                  alt="Arrow"
                />{" "}
                {user.id}
              </td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
