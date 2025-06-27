"use client"
import { useEffect, useState } from "react";

export default function AvatarCircle() {
  const [initial, setInitial] = useState("");

  useEffect(() => {
    const email = localStorage.getItem("user_email");
    if (email) {
      setInitial(email.charAt(0).toUpperCase());
    }
  }, []);

  if (!initial) return null;

  return (
    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-emerald-600 text-white font-bold">
      {initial}
    </div>
  );
}
