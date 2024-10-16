
import Navabar from "@/components/Navabar";
import "./globals.css";
import Footer from "@/components/Footer";


export const metadata = {
  title: "Travel",
  description: "Travel UI/UX App for Camping",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navabar />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
