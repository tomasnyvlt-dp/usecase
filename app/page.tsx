"use client"

import schema from "@/schema/schema";
import { DataDrivenForm } from "@tomasnyvlt-dp/lib";

export default function Home() {
  return (
    <div>
      <DataDrivenForm schema={schema} />
    </div>
  );
}
