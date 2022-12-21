import { SessionProvider } from "services/auth";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
