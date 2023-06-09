import React from "react";
import { useUsers } from "../../../API/useUsers";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle";
import UserRow from "./UserRow";

const ManageUser = () => {
  const [allUser, allUserLoading] = useUsers();

  console.log(allUser);

  return (
    <section>
      <div className="db__container">
        <DashboardTitle title="Manage User" />

        <div className="mt-8">
          <div className="overflow-x-auto">
            <table className="table table-zebra rounded-lg overflow-hidden">
              {/* head */}
              <thead>
                <tr className="text-sm text-white font-nunito">
                  <th className="bg-accent">Image</th>
                  <th className="bg-accent">Name</th>
                  <th className="bg-accent">Email</th>
                  <th className="bg-accent">Role</th>
                  <th className="bg-accent">Action</th>
                </tr>
              </thead>
              <tbody>
                {allUser.map((user) => (
                  <UserRow key={user._id} user={user} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageUser;
