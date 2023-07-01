export default function CollectionItemWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-lg p-4 border border-solid basis-80">
      {children}
    </div>
  );
}