import React, { useState, useRef, useEffect } from "react";

const Navbar = ({ user, onSignOut, onUserSettings, onPreferences, onHelp, onFeedback }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  return (
    <nav className="w-full flex items-center justify-between px-8 py-3 bg-gradient-to-r from-green-600 via-green-400 to-green-600 shadow-lg relative">
      <div className="flex items-center gap-3">
        <img
          src="/logo192.png"
          alt="Logo"
          className="w-10 h-10 rounded-full bg-white shadow border-2 border-green-700"
        />
        <span className="text-2xl font-extrabold text-white tracking-wide drop-shadow">
          RecipeGen
        </span>
      </div>
      <div className="flex items-center gap-4 relative" ref={dropdownRef}>
        <button
          className="flex items-center gap-2 focus:outline-none"
          onClick={() => setDropdownOpen((open) => !open)}
        >
          <span className="font-semibold text-white text-lg">
            {user?.name || user?.userId || "User"}
          </span>
          <img
            src={`https://api.dicebear.com/8.x/initials/svg?seed=${user?.name || user?.userId || "U"}`}
            alt="Profile"
            className="w-10 h-10 rounded-full border-2 border-white shadow"
          />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 top-14 mt-2 w-48 bg-white rounded-lg shadow-lg border border-green-100 z-50 animate-fade-in">
            <div className="px-4 py-3 border-b border-green-100">
              <div className="font-semibold text-green-800">
                {user?.name || user?.userId}
              </div>
              <div className="text-xs text-green-500">{user?.email}</div>
            </div>
            <button
              className="w-full text-left px-4 py-2 hover:bg-green-50 text-green-700"
              onClick={onUserSettings}
              type="button"
            >
              User Settings
            </button>
            <button
              className="w-full text-left px-4 py-2 hover:bg-green-50 text-green-700"
              onClick={onPreferences}
              type="button"
            >
              Preferences
            </button>
            <button
              className="w-full text-left px-4 py-2 hover:bg-green-50 text-green-700"
              onClick={onHelp}
              type="button"
            >
              Help
            </button>
            <button
              className="w-full text-left px-4 py-2 hover:bg-green-50 text-green-700"
              onClick={onFeedback}
              type="button"
            >
              Feedback
            </button>
            <button
              className="w-full text-left px-4 py-2 hover:bg-green-100 text-red-600 border-t border-green-100"
              onClick={onSignOut}
              type="button"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
