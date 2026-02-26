import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Corporate Site | 高品質ITソリューション",
  description:
    "信頼と先進性を追求する日本のIT企業。システム開発、クラウド、DX支援でお客様のビジネスをサポートします。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased text-gray-900 bg-white overflow-x-hidden">{children}</body>
    </html>
  );
}
