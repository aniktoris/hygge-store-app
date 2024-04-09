import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { HeroCarousel } from "./HeroCarousel";

export const Hero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2x text-4xl font-bold tracking-tight sm:text-6xl">
          We're changing the way people shop.
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
        Our innovative approach to online shopping is revolutionizing the way people discover and purchase products. With our curated selection and seamless user experience, finding what you need has never been easier. Join us in shaping the future of retail with Hygge!
        </p>
        <Button asChild size='lg' className="mt-10">
          <Link to='/products'>
            Our Products
          </Link>
        </Button>
      </div>
      <HeroCarousel/>
    </section>
  )
}
