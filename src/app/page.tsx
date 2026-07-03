import About from '@/components/sections/about';
import Blogs from '@/components/sections/blogs';
import Categories from '@/components/sections/categories';
import FeaturedBrands from '@/components/sections/featured-brands';
import Hero from '@/components/sections/hero';
import Instagram from '@/components/sections/instagram';
import LatestVideo from '@/components/sections/latest-video';
import Products from '@/components/sections/products';
import Testimonials from '@/components/sections/testimonials';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Products />
      <Testimonials />
      <Categories />
      <LatestVideo />
      <FeaturedBrands />
      <Blogs />
      <Instagram />
    </div>
  );
}