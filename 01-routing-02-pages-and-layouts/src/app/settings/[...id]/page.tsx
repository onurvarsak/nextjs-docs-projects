import Link from "next/link";

export default function Page() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      Settings Page
      <Link href={"/settings"}>Back</Link>
    </div>
  );
}
