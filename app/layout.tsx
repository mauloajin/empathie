import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://empathie-ten.vercel.app"),
  title: "Empathie（エンパティ）｜西天満・北新地のミシュラン一つ星フレンチ",
  description: "大阪・西天満のフレンチレストラン Empathie（エンパティ）。ミシュランガイド京都・大阪2026一つ星。北新地駅、淀屋橋駅、東梅田駅から徒歩圏内。",
  alternates: { canonical: "/" },
  openGraph: { title: "Empathie｜French Restaurant in Osaka", description: "French tradition, Japanese ingredients, and the spirit of empathy in Nishi-Tenma, Osaka.", type: "website", locale: "ja_JP" },
  verification: { google: "ayHXvvh7MAYyEd0yabm5xYrI98qeN_1bfcLkvUPkbrM" },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
