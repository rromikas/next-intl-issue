"use client";

import { usePathname, useRouter } from "@/navigation";
import { useParams } from "next/navigation";

const Page = () => {
  const pathname = usePathname();

  const router = useRouter();

  const params = useParams() as any;

  return <div onClick={() => router.push({ pathname, params })}>Button</div>;
};

export default Page;
