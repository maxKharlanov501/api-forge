export function Page({ children }: { children: React.ReactNode }) {
  return <div className="flex flex-column gap-4 p-6">{children}</div>
}