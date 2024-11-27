// app/page.tsx

import HeroHome from "@/components/home sections/HeroHome";
import ComputerVision from '@/components/home sections/ComputerVision';
import VideoStreaming from "@/components/home sections/VideoStreaming";
import Dashboard from "@/components/home sections/Dashboard";
import Installation from "@/components/home sections/Installation";
import Testimonials from "@/components/home sections/Testimonials";

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