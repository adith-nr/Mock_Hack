import React, { useState } from "react";
import ControlPanel from "./ControlPanel";
import CartBill from "./CartBill";
import AuthPage from "./AuthPage";
import Navbar from "./Navbar";

const LandingPage = () => {
  const [user, setUser] = useState(null);

  if (!user) {
    // Only show AuthPage, not Navbar or main content
    return <AuthPage onAuthSuccess={setUser} />;
  }

  return (
    <>
      <Navbar user={user} /* ...other props... */ />
      <main className="flex w-full min-h-screen bg-gradient-to-r from-green-50 via-white to-green-50">
        <ControlPanel />
        <CartBill />
      </main>
    </>
  );
};

export default LandingPage;
