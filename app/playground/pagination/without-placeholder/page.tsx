import PaginationWithoutPlaceholder from "@/components/PaginationWithoutPlaceholder";

export default function PaginationPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-semibold mb-4">
        📄 placeholderData 적용 전
      </h1>
      <PaginationWithoutPlaceholder />
    </main>
  );
}
