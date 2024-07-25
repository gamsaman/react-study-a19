import "../styles/global.css";
import Header from "./components/header";

export const metadata = {
  title: "React-study-a19",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
