import Link from "next/link";

export default function Page() {
  return (
    <div>
      Home Page
      <div style={{ display: "flex", gap: 20 }}>
        <Link href={"/dashboard"}>Dashboard Page</Link>
        <Link href={"/settings"}>Settings Page</Link>
        <Link href={"/analytics"}>Analytics Page</Link>
      </div>
    </div>
  );
}
