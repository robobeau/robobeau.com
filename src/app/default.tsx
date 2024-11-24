"use client";

import { Metadata } from "next";
import { FC } from "react";

import "@/app/globals.css";
import { MY_HANDLE, MY_NAME } from "@/constants";

const metadata: Metadata = {
  authors: { name: MY_NAME },
  title: `${MY_HANDLE}.exe`,
};

const Default: FC = () => null;

export { Default as default, metadata };
