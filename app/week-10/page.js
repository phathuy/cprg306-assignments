"use client";

// Import the useUserAuth hook
import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Sign in to Firebase with GitHub authentication using await gitHubSignIn();
  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  // Sign out of Firebase using await firebaseSignOut();
  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <main>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to the Shopping List App
        </h1>
        {user ? (
          <div className="flex flex-col items-center">
            <p className="text-xl mb-4">
              Welcome, {user.displayName} ({user.email})
            </p>
            <button
              onClick={handleSignOut}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Log Out
            </button>
            <Link
              href="/week-10/shopping-list"
              className="mt-4 text-blue-500 underline"
            >
              Go to Shopping List
            </Link>
          </div>
        ) : (
          <button
            onClick={handleSignIn}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Sign In with GitHub
          </button>
        )}
      </div>
    </main>
  );
}
