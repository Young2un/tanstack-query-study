import MainButton from "@/components/\bMainButton";

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <MainButton />
      {children}
    </section>
  );
}
