"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { bestSellers, WHATSAPP_LINK } from "@/lib/constants";
import type { BestSeller } from "@/lib/constants";

function WatchImage({ watch }: { watch: BestSeller }) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
        <div className="text-center p-8">
          <svg
            className="w-24 h-24 mx-auto mb-4 text-amber-500/30"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="text-neutral-500 text-sm font-serif">{watch.name}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Image
        src={watch.image}
        alt={watch.name}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        onError={() => setImageError(true)}
        onLoad={(e) => {
          const img = e.currentTarget;
          if (img.naturalWidth === 0) {
            setImageError(true);
          }
        }}
      />
    </>
  );
}

export function BestSellers() {
  return (
    <section
      id="collection"
      className="py-24 sm:py-32 bg-neutral-950 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white">
            Best Sellers
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            Discover our most sought-after timepieces, each a testament to
            precision and elegance
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {bestSellers.map((watch) => (
            <Card
              key={watch.id}
              className="group bg-neutral-900 border-neutral-800 overflow-hidden hover:border-amber-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-2"
            >
              <div className="relative aspect-square overflow-hidden bg-neutral-800">
                <WatchImage watch={watch} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <CardContent className="p-6 space-y-3">
                <h3 className="font-serif text-2xl font-semibold text-white">
                  {watch.name}
                </h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {watch.description}
                </p>
                {watch.price && (
                  <p className="text-amber-400 font-semibold text-lg">
                    {watch.price}
                  </p>
                )}
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-neutral-700 bg-transparent text-white hover:bg-amber-500/10 hover:border-amber-500/50 hover:text-amber-400 transition-all duration-300"
                >
                  <a
                    href={`${WHATSAPP_LINK}?text=Hi, I'm interested in ${encodeURIComponent(watch.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-4 h-4"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    Contact on WhatsApp
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

