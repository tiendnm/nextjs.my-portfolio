import { SessionProvider } from "@services/auth";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <div className="relative h-full w-full overflow-auto bg-slate-300">{children}</div>
    </SessionProvider>
  );
}
