"use client";

import { useRouter } from "next/navigation";
import { FC } from "react";

import _NotFound from "@/components/NotFound/NotFound";

const NotFound: FC = () => {
  const router = useRouter();

  return <_NotFound onConfirm={router.back} />;
};

export { NotFound as default };
