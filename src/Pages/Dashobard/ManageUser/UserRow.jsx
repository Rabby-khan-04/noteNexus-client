import React from "react";
import profileImg from "../../../assets/Images/Manage_user/profileImg.jpg";

const UserRow = ({ user }) => {
  const { _id, email, image, name, role } = user;

  const handleUserRole = (e, id) => {
    const selectedRole = e.target.value;
    if (selectedRole === "Select User Role") {
      return;
    }
  };

  return (
    <tr className="text-sm font-nunito text-black">
      <td>
        <img
          src={image || profileImg}
          className="h-20 w-20 object-cover object-center"
          alt=""
        />
      </td>
      <td>
        <p>{name}</p>
      </td>
      <td>
        <p>{email}</p>
      </td>
      <td>
        <p>{role ? role : "Student"}</p>
      </td>
      <td>
        <div className="flex items-center">
          <p className="w-28 font-bold">Make User As : </p>
          <select
            className="select select-bordered w-[250px]"
            onChange={(e) => handleUserRole(e, _id)}
          >
            <option defaultValue>Select User Role</option>
            <option
              value="Admin"
              selected={role === "Admin"}
              disabled={role === "Admin"}
            >
              Admin
            </option>
            <option
              value="Instructor"
              selected={role === "Instructor"}
              disabled={role === "Instructor"}
            >
              Instructor
            </option>
          </select>
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
