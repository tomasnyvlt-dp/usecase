"use client"

import schema from "@/schema/schema";
import { DataDrivenForm } from "@tomasnyvlt/tomasnyvlt-dp";

export default function Home() {
  return (
    <div>
      <DataDrivenForm schema={schema} />
    </div>
  );
}
