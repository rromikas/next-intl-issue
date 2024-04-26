"use client";

import { usePathname, useRouter } from "@/navigation";

const Page = () => {
  const pathname = usePathname();

  const router = useRouter();

  return <div onClick={() => router.push({ pathname })}>Button</div>;
};

export default Page;
