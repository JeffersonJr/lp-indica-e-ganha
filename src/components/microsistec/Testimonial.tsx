import * as React from "react";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Testimonial() {
  const [api, setApi] = React.useState<CarouselApi>();

  return (
    <section className="w-full overflow-hidden border-y border-[color:var(--brand-ink)]/10">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="flex flex-col md:grid md:grid-cols-12 gap-8 md:gap-10 items-start md:items-center">
          <div className="md:col-span-2 hidden md:block">
            <Quote className="w-14 h-14 text-[color:var(--brand-orange)]" />
          </div>
          <div className="md:col-span-10 min-w-0 w-full overflow-hidden relative">
            <div className="md:hidden absolute top-0 -left-2 opacity-20 pointer-events-none">
              <Quote className="w-12 h-12 text-[color:var(--brand-orange)]" />
            </div>
            <Carousel setApi={setApi} opts={{ loop: true }} className="w-full">
              <CarouselContent>
                {testimonials.map((t) => (
                  <CarouselItem key={t.id}>
                    <blockquote className="text-3xl md:text-5xl font-serif-italic leading-[1.2] tracking-[-0.01em]">
                      "{t.quote}"
                    </blockquote>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex gap-3 justify-end mt-6">
                <button
                  type="button"
                  onClick={() => api?.scrollPrev()}
                  className="w-10 h-10 rounded-full border border-[color:var(--brand-ink)]/15 bg-background flex items-center justify-center text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-ink)] hover:text-[color:var(--brand-sand)] transition duration-200 cursor-pointer shadow-soft"
                  aria-label="Depoimento anterior"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => api?.scrollNext()}
                  className="w-10 h-10 rounded-full border border-[color:var(--brand-ink)]/15 bg-background flex items-center justify-center text-[color:var(--brand-ink)] hover:bg-[color:var(--brand-ink)] hover:text-[color:var(--brand-sand)] transition duration-200 cursor-pointer shadow-soft"
                  aria-label="Próximo depoimento"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
