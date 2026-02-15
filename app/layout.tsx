import "@/app/globals.css";
import { Inter } from "next/font/google";
import BottomTabs from "./components/BottomTabBar";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <BottomTabs />
      </body>
    </html>
  );
}