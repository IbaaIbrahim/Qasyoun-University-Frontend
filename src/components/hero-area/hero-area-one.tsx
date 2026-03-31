import { getLocale } from "next-intl/server";
import { listHomeHeroSlides } from "@/lib/services/home-hero.service";
import HeroAreaOneSlider from "./hero-area-one-slider";

export default async function HeroAreaOne() {
  const locale = await getLocale();
  const slides = await listHomeHeroSlides(locale);
  return <HeroAreaOneSlider slides={slides} />;
}
