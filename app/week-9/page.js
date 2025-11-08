// Import the useUserAuth hook
import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

/**
 * This will be the landing page for our application.
 * Display a login button if the user is not logged in.
 * If the user is logged in, display a welcome message, a logout button,
 * and a link to the shopping list page.
 *
 * user is the user object returned from Firebase Authentication. If the user is not logged in, the value will be null.
 * gitHubSignIn is a function that will open a popup window to allow the user to sign in with GitHub.
 * firebaseSignOut is a function that will log the user out.
 *
 */

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
              href="/week-9/shopping-list"
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
