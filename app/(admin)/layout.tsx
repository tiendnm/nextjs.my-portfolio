import { SessionProvider } from "@services/auth";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}
