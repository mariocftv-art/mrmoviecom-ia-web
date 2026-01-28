"use client";

import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("/api/dashboard")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) {
    return <p className="text-gray-500">Carregando...</p>;
  }
