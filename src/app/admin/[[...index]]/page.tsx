"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity/sanity.config";

export default function StudioPage() {
  return (
    <div className="min-h-screen bg-white">
      <NextStudio config={config} />
    </div>
  );
}
