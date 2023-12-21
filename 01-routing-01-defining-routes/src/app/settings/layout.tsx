import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Settings Layout",
  description: "Generated by ONUR VARSAK",
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: "#CCA43B",
        height: "400px",
        padding: "100px",
      }}
    >
      Settings Layout
      {children}
    </div>
  );
}