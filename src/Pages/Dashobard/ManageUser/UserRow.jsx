import React from "react";
import profileImg from "../../../assets/Images/Manage_user/profileImg.jpg";
import { useAxiosSecure } from "../../../API/useAxiosSecure";
import Swal from "sweetalert2";

const UserRow = ({ user, userRefetch }) => {
  const { _id, email, image, name, role } = user;
  const [axiosSecure] = useAxiosSecure();

  const handleUserRole = (e, id) => {
    const selectedRole = { role: e.target.value };
    if (selectedRole.role === "Select User Role") {
      return;
    }
    axiosSecure.put(`/set-role/${id}`, selectedRole).then((res) => {
      if (res.data.upsertedCount > 0 || res.data.modifiedCount > 0) {
        userRefetch();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Updated The User",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
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
