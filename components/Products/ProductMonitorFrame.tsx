"use client";

import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  className?: string;
  size?: "sm" | "md" | "lg";
};

const sizeClasses = {
  sm: "max-w-[320px]",
  md: "max-w-[400px]",
  lg: "max-w-[520px]",
};

const barSizes = {
  sm: "px-3 py-1.5 gap-1.5",
  md: "px-3 py-2 gap-2",
  lg: "px-4 py-2 gap-2",
};

const dotSizes = {
  sm: "h-2 w-2",
  md: "h-2 w-2",
  lg: "h-2.5 w-2.5",
};

export default function ProductMonitorFrame({ src, alt, className = "", size = "lg" }: Props) {
  return (
    <div className={`relative mx-auto w-full ${sizeClasses[size]} ${className}`}>
      <div className="rounded-t-2xl border-4 border-stroke bg-[#1a1a1a] dark:border-strokedark">
        <div className={`flex items-center border-b border-stroke/30 dark:border-strokedark/30 ${barSizes[size]}`}>
          <span className={`rounded-full bg-[#ff5f57] ${dotSizes[size]}`} />
          <span className={`rounded-full bg-[#febc2e] ${dotSizes[size]}`} />
          <span className={`rounded-full bg-[#28c840] ${dotSizes[size]}`} />
        </div>
        <div className="relative aspect-video overflow-hidden bg-black">
          <Image src={src} alt={alt} fill className="object-contain" />
        </div>
      </div>
      <div className="mx-auto h-4 w-16 rounded-b-md bg-[#2d2d2d]" />
      <div className="mx-auto -mt-0.5 h-2 w-24 rounded-b-md bg-[#3d3d3d]" />
    </div>
  );
}
