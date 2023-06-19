import Footer from "./components/Footer";
import RegisterModal from "./components/modals/RegisterModal";
import Navbar from "./components/navbar/Navbar";
import "./globals.css";
import { Manrope } from "next/font/google";
import ToasterProvider from "./providers/ToasterProvider";
import LoginModal from "./components/modals/LoginModal";
import { getSession } from "@/lib/getSession";
import CartProvider from "./context/CartContex";
import ClientOnly from "./components/ClientOnly";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata = {
  title: "Loren Cosméticos Naturais",
  description: "Os melhores cosméticos naturais",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  console.log(session);

  return (
    <html lang="en">
      <body className={manrope.className}>
        <ClientOnly>
          <CartProvider>
            <ToasterProvider />
            <RegisterModal />
            <LoginModal />
            <Navbar session={session} />
            {children}
            <Footer />
          </CartProvider>
        </ClientOnly>
      </body>
    </html>
  );
}
