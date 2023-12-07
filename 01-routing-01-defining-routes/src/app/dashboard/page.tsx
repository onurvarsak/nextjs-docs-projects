import Link from "next/link";

export default function Page() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      Dashboard Page
      <Link href={"/"}>Back</Link>
    </div>
  );
}
