import React from "react";
function Dashboard({ user }) {
  return (
    <>
      <div>
        <h1>Dashboard</h1>
        <img src={user.photoURL} />
      </div>
    </>
  );
}
export default Dashboard;
