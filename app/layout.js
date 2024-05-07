import "./globals.css";


export const metadata = {
  title: "NextJS Tailwind Sandbox",
  description: "Tailwind Tutorial Practice",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
