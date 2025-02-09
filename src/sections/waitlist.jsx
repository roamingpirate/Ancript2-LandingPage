import React, { useState } from "react";
import { X } from "lucide-react";
import { db, collection, addDoc, getDocs, query, where } from "../firebaseConfig";
import toast, { Toaster } from "react-hot-toast"; // Import toast

const WaitlistPopup = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Query Firestore to check if the email already exists
      const q = query(collection(db, "waitlist"), where("email", "==", email));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        toast.error("You have already joined the waitlist!"); // Show error toast
        setLoading(false);
        return;
      }

      // Add new user to the waitlist
      await addDoc(collection(db, "waitlist"), { name, email, timestamp: new Date() });
      toast.success("Successfully joined the waitlist! 🎉"); // Show success toast

      // Reset form and close popup
      setName("");
      setEmail("");
      setTimeout(() => onClose(), 2000); // Close popup after 2 sec
    } catch (error) {
      console.error("Error saving email:", error);
      toast.error("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm bg-opacity-50 z-50">
      <div className="relative bg-white p-8 rounded-lg shadow-lg w-11/12 max-w-md">
        <Toaster position="bottom-center" reverseOrder={false} /> {/* Toast Container */}

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <X size={24} color="black" strokeWidth={2} />
        </button>

        {/* Headline */}
        <h2 className="text-2xl font-bold text-center mb-4">Be the First to Experience Ancript!</h2>

        {/* Subheadline */}
        <p className="text-gray-600 text-center mb-6">
          Join the waitlist today and get early access to the future of presentations.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* CTA Button */}
          <button
            type="submit"
            className="w-full bg-[#6E5EE5] text-white py-2 px-4 rounded-md hover:bg-[#6E5EE5]/80 focus:ring-2 focus:ring-blue-500"
            disabled={loading}
          >
            {loading ? "Joining..." : "Join the Waitlist"}
          </button>
        </form>

        {/* Optional Social Proof */}
        <p className="text-gray-500 text-sm text-center mt-4">Join professionals already on the list!</p>
      </div>
    </div>
  );
};

export default WaitlistPopup;
