import "./globals.css";
import Nav from "./Navbar";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="z-50">
          <div className="2xl:max-w-7xl lg:max-w-5xl mx-auto">
            <Nav />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
