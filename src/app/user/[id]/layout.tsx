export default function User({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-bold text-xl">User page</h2>
      {children}
    </div>
  );
}
