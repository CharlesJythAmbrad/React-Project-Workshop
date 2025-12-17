// Signup.jsx
import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "../config/firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      return setError("Passwords do not match.");
    }

    try {
      await addDoc(collection(firestore, "users"), {
        email: email,
        password: password, // ⚠️ only if you're sure you want to store this
        createdAt: new Date(),
      });

      setSuccess("User added to Firestore!");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      console.error(err.message);
      setError("Error saving to Firestore: " + err.message);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">Create an Account</h2>

      <form onSubmit={handleSignup} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          className="border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
        >
          Sign Up
        </button>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center">{success}</p>}
      </form>
    </div>
  );
};

export default Signup;
