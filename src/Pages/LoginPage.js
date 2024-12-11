import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';


const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [error, setError] = useState('');
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  // Handle login submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      setError('Please verify the CAPTCHA');
      return;
    }

    // Simulate login logic
    if (username === 'admin' && password === 'admin') {
      onLogin(); // If successful, call onLogin to trigger login
    } else {
      setError('Invalid username or password');
    }
  };

  // Handle captcha verification
  const handleCaptchaChange = (value) => {
    if (value) {
      setCaptchaVerified(true);
    }
  };

  // Handle forgot password
  const handleForgetPassword = () => {
    setIsForgotPassword(true);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        {isForgotPassword ? (
          <div>
            <h3 className="text-xl mb-4">Forgot Password?</h3>
            <p>We will send a password reset link to your email address.</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 border border-gray-300 rounded-lg mt-4"
            />
            <button
              className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-4"
            >
              Reset Password
            </button>
            <button
              onClick={() => setIsForgotPassword(false)}
              className="w-full text-center mt-2 text-blue-600"
            >
              Back to Login
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-700 mb-2">Username</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                required
              />
            </div>

            {/* CAPTCHA */}
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Replace with your reCAPTCHA site key
              onChange={handleCaptchaChange}
            />

            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 mt-4"
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleForgetPassword}
              className="w-full text-center mt-2 text-blue-600"
            >
              Forgot Password?
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
