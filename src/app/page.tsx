import SiteInfo from "@/components/info/SiteInfo";
import SocketTest from "@/components/socket/SocketTest";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SiteInfo />
      <SocketTest />
    </main>
  );
}
