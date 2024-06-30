"use client";

import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";

const Login: React.FC = () => {
  const router = useRouter();

  // Handle successful Google login
  const handleGoogleSuccess = (credentialResponse: any) => {
    console.log("Google login successful", credentialResponse);
  };

  // Handle Google login error
  const handleGoogleError = () => {
    console.log("Google login failed");
  };

  return (
    <GoogleOAuthProvider clientId="YOUR_GOOGLE_CLIENT_ID">
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
            Log In
          </h2>

          <div className="mt-6">
            <div className="w-full flex justify-center">
              {/* Google login button */}
              <GoogleLogin
                onSuccess={handleGoogleSuccess}
                onError={handleGoogleError}
              />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
