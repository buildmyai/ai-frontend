"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CalendarDays,
  Mail,
  MessageSquare,
  User,
  Building,
  Brain,
} from "lucide-react";

interface Booking {
  id: number;
  name: string;
  email: string;
  business?: string;
  message: string;
  selected_models: string;
  created_at: string;
  status?: string;
}

export default function MyBookings() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const userEmail =
    typeof window !== "undefined" ? localStorage.getItem("user_email") : null;

  useEffect(() => {
    if (!userEmail) {
      router.push("/login");
      return;
    }

    const fetchBookings = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/all-bookings");
        const data = await res.json();
        const userBookings = data.filter(
          (b: Booking) => b.email === userEmail
        );
        setBookings(userBookings);
      } catch (err) {
        console.error("Error loading bookings", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [userEmail, router]);

  const getStatusStyle = (status: string) => {
    switch (status.toLowerCase()) {
      case "confirmed":
        return "bg-green-100 text-green-800 border border-green-300";
      case "cancelled":
        return "bg-red-100 text-red-700 border border-red-300";
      case "pending":
      default:
        return "bg-yellow-100 text-yellow-800 border border-yellow-300";
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-emerald-700 mb-6 text-center">
        📅 My Bookings
      </h1>

      {loading ? (
        <div className="text-center text-gray-500 py-10 animate-pulse text-lg">
          Fetching your bookings...
        </div>
      ) : bookings.length === 0 ? (
        <div className="text-center py-20 text-gray-600 border rounded-lg bg-white shadow-sm">
          <p className="text-2xl font-semibold mb-1">🗂️ Nothing here yet</p>
          <p className="text-sm">You haven’t booked any consultations.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bookings.map((booking) => (
            <div
              key={booking.id}
              className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition border border-gray-200"
            >
              {/* Top: Name + Status */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold flex items-center gap-2 text-gray-800">
                  <User size={18} className="text-emerald-600" />
                  {booking.name}
                </h2>
                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full ${getStatusStyle(
                    booking.status || "pending"
                  )}`}
                >
                  {booking.status || "pending"}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-3 text-sm text-gray-700">
                <p className="flex items-center gap-2">
                  <Mail size={16} className="text-emerald-500" />
                  <span className="font-medium">Email:</span> {booking.email}
                </p>
                <p className="flex items-center gap-2">
                  <Building size={16} className="text-emerald-500" />
                  <span className="font-medium">Business:</span>{" "}
                  {booking.business || "—"}
                </p>
                <p className="flex items-center gap-2">
                  <MessageSquare size={16} className="text-emerald-500" />
                  <span className="font-medium">Message:</span>{" "}
                  {booking.message}
                </p>
                <p className="flex items-center gap-2">
                  <Brain size={16} className="text-emerald-500" />
                  <span className="font-medium">Models:</span>{" "}
                  {booking.selected_models}
                </p>
                <p className="flex items-center gap-2 text-gray-500 text-xs pt-2">
                  <CalendarDays size={16} />{" "}
                  {new Date(booking.created_at).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
