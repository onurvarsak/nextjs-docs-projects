import Link from "next/link";

export default function Page() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      Settings Page
      <Link href={"/settings/example1"}>Settings-Example</Link>
      <Link href={"/settings/example1/example2"}>
        Settings-Example1-Example-2
      </Link>
      <Link href={"/"}>Back</Link>
    </div>
  );
}
