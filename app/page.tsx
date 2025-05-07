"use client";

import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading } = useQuery<string>({
    queryKey: ["hello"],
    queryFn: () =>
      new Promise((res) => setTimeout(() => res("Hello from TanStack!"), 1000)),
  });

  return <div>{isLoading ? "Loading..." : data}</div>;
}
