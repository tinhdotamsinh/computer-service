import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
const bannerItems = [
    {
      image: "/banner1.jpg",
      title: "New Arrivals",
      description: "Check out our latest tech products",
      link: "/products/new",
    },
    {
      image: "/banner2.jpg",
      title: "Special Offers",
      description: "Save big on selected items",
      link: "/products/offers",
    },
    {
      image: "/banner3.jpg",
      title: "Expert Service",
      description: "Professional computer repair and upgrades",
      link: "/services",
    },
  ];

export default function BannerCarousel() {
  return (
    <div className="relative">
  <Carousel
    opts={{
      align: "start",
      loop: true,
    }}
    className="w-full"
  >
    <CarouselContent>
      {
        bannerItems.map((item) => (
          <CarouselItem>
            <div className="relative aspect-[2.2/1] overflow-hidden rounded-lg">
              <img
                src='/placeholder600x400.svg'
                alt={item.title}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center">
                <div className="container mx-auto px-4">
                  <div className="max-w-lg">
                    <h2 className="text-4xl font-bold text-white mb-4">{item.title}</h2>
                    <p className="text-xl text-white/90 mb-8">{item.description}</p>
                    <a
                      href={item.link}
                      className="inline-block bg-green-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </CarouselItem>
        ))
      }
    </CarouselContent>
  </Carousel>
</div>

  )
}
