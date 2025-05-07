"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useState } from "react";

const fetchProjects = async (page: number) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=5`
  );
  if (!res.ok) throw new Error("데이터를 불러올 수 없습니다");
  return res.json();
};

export default function Pagination() {
  const [page, setPage] = useState(1);

  const { data, isPending, isError, error, isFetching, isPlaceholderData } =
    useQuery({
      queryKey: ["projects", page],
      queryFn: () => fetchProjects(page),
      placeholderData: keepPreviousData,
    });

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Page: {page}</h2>

      {isPending ? (
        <p>로딩 중...</p>
      ) : isError ? (
        <p>에러: {(error as Error).message}</p>
      ) : (
        <ul className="space-y-1">
          {data?.map((project: any) => (
            <li key={project.id} className="border p-2 rounded">
              {project.title}
            </li>
          ))}
        </ul>
      )}

      <div className="flex gap-2 pt-4">
        <button
          className="border px-4 py-1 rounded disabled:opacity-50"
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
        >
          이전
        </button>
        <button
          className="border px-4 py-1 rounded"
          onClick={() => setPage((p) => p + 1)}
          disabled={isPlaceholderData}
        >
          다음
        </button>
      </div>

      {isFetching && (
        <p className="text-sm text-gray-500">데이터 불러오는 중...</p>
      )}
      {isPlaceholderData && (
        <p className="text-sm text-orange-500">이전 페이지 데이터 표시 중</p>
      )}
    </div>
  );
}
