"use client";

import { useState, useEffect } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardPage() {
  const [stats, setStats] = useState<{
    total: number;
    today: number;
    week: number;
    month: number;
    isLoading: boolean;
  }>({
    total: 0,
    today: 0,
    week: 0,
    month: 0,
    isLoading: true,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8000/api/bookings/summary");
        const data = await res.json();
        setStats({
          total: data.total,
          today: data.today,
          week: data.week,
          month: data.month,
          isLoading: false,
        });
      } catch (error) {
        console.error("Error fetching booking summary:", error);
        setStats((prev) => ({ ...prev, isLoading: false }));
      }
    };

    fetchData();
  }, []);

  if (stats.isLoading) {
    return (
      <div className="min-h-screen bg-white px-6 py-8">
        <Skeleton className="h-8 w-[200px] mb-6" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[...Array(4)].map((_, i) => (
            <Skeleton key={i} className="h-32 rounded-lg" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-white px-6 py-8">
      <h1 className="text-3xl font-bold text-emerald-700 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Total Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{stats.total}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Today's Bookings</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{stats.today}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{stats.week}</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">{stats.month}</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
