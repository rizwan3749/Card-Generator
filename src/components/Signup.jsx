// Signup.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!name || !email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      console.log("User signed up with name:", name, "and email:", email);
      alert("Signup successful!");
      setLoading(false);
    }, 1000);
  };

  const handleSignin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!email || !password) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    setTimeout(() => {
      console.log("User signed in with email:", email);
      alert("Signin successful!");
      setLoading(false);
    }, 1000);
  };

  const handleGoogleLogin = () => {
    alert("Google Login clicked");
    // Add Google login functionality here if needed
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-800 to-gray-900 ">
      <Link to="/">
        <p className="text-white">Back to Dashboard</p>
      </Link>
      <div
        className={`backdrop-blur-lg bg-white/30 p-8 border rounded-lg shadow-lg max-w-sm w-full transition-all duration-700 transform ${
          isSigningIn
            ? "animate-flip-x rotate-y-180"
            : "animate-flip-y opacity-100"
        }`}
      >
        <h2 className="text-2xl font-semibold  text-white text-center mb-6">
          {isSigningIn ? "Sign In" : "Sign Up"}
        </h2>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form
          onSubmit={isSigningIn ? handleSignin : handleSignup}
          className="space-y-4"
        >
          {!isSigningIn && (
            <div>
              <label className="block text-white text-sm font-medium mb-1">
                Name:
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          )}
          <div>
            <label className="block text-white text-sm font-medium mb-1">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block text-white text-sm font-medium mb-1">
              Password:
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 rounded bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 mt-4 rounded bg-purple-600 text-white font-semibold hover:bg-purple-700 transition disabled:bg-gray-500"
          >
            {loading
              ? isSigningIn
                ? "Signing in..."
                : "Signing up..."
              : isSigningIn
              ? "Sign In"
              : "Sign Up"}
          </button>
        </form>

        <button
          onClick={handleGoogleLogin}
          className="w-full py-2 mt-4 rounded bg-red-600 text-white font-semibold hover:bg-red-700 transition"
        >
          Login with Google
        </button>

        <p className="text-white text-center mt-4">
          {isSigningIn ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsSigningIn(!isSigningIn)}
            className="text-purple-300 underline hover:text-purple-500"
          >
            {isSigningIn ? "Sign Up" : "Sign In"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
