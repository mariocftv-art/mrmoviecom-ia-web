export default function MainContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="
      flex-1
      px-10 py-8
      max-w-[1600px]
      mx-auto
    ">
      {children}
    </main>
  );
}
