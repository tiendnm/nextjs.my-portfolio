import { AdminContextProvider } from "@contexts/AdminContext";
import { SessionProvider } from "@services/auth";

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <AdminContextProvider>{children}</AdminContextProvider>
    </SessionProvider>
  );
}
