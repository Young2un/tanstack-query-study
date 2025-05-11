import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1 className="text-3xl font-bold text-center mb-5 text-gray-800">
        TanStack Query Playground
      </h1>
      <p className="text-center mb-10  text-gray-600">
        실험하고 비교하며 체감하는 공식 문서 기반 데모
      </p>

      {/* 예제 섹션: Pagination */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          📦 Paginated / Lagged Queries{" "}
          <span className="text-sm mr-1 text-blue-400">
            <Link href="https://tanstack.com/query/latest/docs/framework/react/guides/paginated-queries">
              공식문서 바로가기 🔗
            </Link>
          </span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/playground/pagination/without-placeholder"
            className="flex-1 bg-white border p-4 shadow rounded hover:bg-red-50"
          >
            ❌ placeholderData 미적용
          </Link>
          <Link
            href="/playground/pagination"
            className="flex-1 bg-white border p-4 shadow rounded hover:bg-blue-50"
          >
            ✅ placeholderData 적용
          </Link>
        </div>
      </section>

      {/* 예제 섹션: Infinite Query (예정) */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">
          📦 Infinite Query 예제
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="#"
            className="flex-1 bg-gray-100 border p-4 rounded text-gray-400 cursor-not-allowed"
          >
            ❌ 미적용 (준비 중)
          </Link>
          <Link
            href="#"
            className="flex-1 bg-gray-100 border p-4 rounded text-gray-400 cursor-not-allowed"
          >
            ✅ 적용 (준비 중)
          </Link>
        </div>
      </section>

      <footer className="text-sm text-gray-400 mt-20 text-center">
        © 2025 TanStack Query Study
      </footer>
    </main>
  );
}
