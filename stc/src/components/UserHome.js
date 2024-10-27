import React, { Component, useEffect, useState } from "react";

export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "log";
  };
  return (
    <center>
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div >
         <h1>Thanks for Visiting Our Website!</h1> 
          <br />
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
        </div>
      </div>
    </div>
    </center>
  );
}