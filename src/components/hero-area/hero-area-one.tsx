import HeroAreaOneSlider from "./hero-area-one-slider";
import Slider from "@/lib/classes/slider";

export default async function HeroAreaOne({ slides }: { slides: Slider[] }) {
  return <HeroAreaOneSlider slides={slides} />;
}
