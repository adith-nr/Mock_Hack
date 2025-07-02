import React, { useState, useEffect } from "react";
import usersData from "../users.json";
import UserProfileSetup from "./UserProfileSetup";

const AuthPage = ({ onAuthSuccess }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ userId: "", password: "" });
  const [error, setError] = useState("");
  const [users, setUsers] = useState(usersData);
  const [showProfileSetup, setShowProfileSetup] = useState(false);
  const [newUser, setNewUser] = useState({});

  // Prevent scroll on body when AuthPage is mounted
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (isLogin) {
      // Login: check if user exists
      const user = users.find(
        (u) => u.userId === form.userId && u.password === form.password
      );
      if (user) {
        onAuthSuccess(form.userId);
      } else {
        setError("Invalid credentials.");
      }
    } else {
      // Register: check if userId taken
      const exists = users.some((u) => u.userId === form.userId);
      if (exists) {
        setError("User ID already exists.");
      } else {
        setUsers([...users, { ...form }]);
        setNewUser({ userId: form.userId, password: form.password });
        setShowProfileSetup(true);
      }
    }
  };

  const handleProfileComplete = (profile) => {
    // Save profile to localStorage or backend here if needed
    onAuthSuccess(profile.userId);
  };

  if (showProfileSetup) {
    return (
      <UserProfileSetup
        onComplete={handleProfileComplete}
        userId={newUser.userId}
        password={newUser.password}
      />
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 overflow-hidden">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-green-700">
          {isLogin ? "Login" : "Register"}
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="userId"
            placeholder="User ID"
            value={form.userId}
            onChange={handleChange}
            required
            className="border border-green-300 rounded px-3 py-2"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="border border-green-300 rounded px-3 py-2"
          />
          {error && <div className="text-red-600 text-sm">{error}</div>}
          <button
            type="submit"
            className="bg-green-600 text-white rounded px-4 py-2 hover:bg-green-700 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <div className="mt-4 text-center">
          {isLogin ? (
            <span>
              New user?{" "}
              <button
                className="text-green-700 underline"
                onClick={() => {
                  setIsLogin(false);
                  setError("");
                }}
              >
                Register
              </button>
            </span>
          ) : (
            <span>
              Already have an account?{" "}
              <button
                className="text-green-700 underline"
                onClick={() => {
                  setIsLogin(true);
                  setError("");
                }}
              >
                Login
              </button>
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;