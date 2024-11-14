// app/page.tsx

import HeroHome from "@/components/HeroHome";
import ComputerVision from '@/components/ComputerVision';
import VideoStreaming from "@/components/VideoStreaming";
import Dashboard from "@/components/Dashboard";
import Installation from "@/components/Installation";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroHome />
      <ComputerVision />
      <VideoStreaming />
      <Dashboard />
      <Installation />
      {/* <Testimonials /> */}
    </div>
  );
}