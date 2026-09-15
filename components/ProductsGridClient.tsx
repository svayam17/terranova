"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { collections } from "@/lib/content";

export default function ProductsGridClient() {
  return (
    <div>
      <div className="px-0 pb-8 md:px-0 lg:px-0">
        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-5">
          {collections.map((collection) => (
            <div key={collection.slug} className="group">
              <div className="relative h-[380px] sm:h-[440px] xl:h-[560px] overflow-hidden">
                <Link href={`/products/${collection.slug}`} className="block absolute inset-0">
                  <Image src={collection.image} alt={`${collection.name} material collection`} fill sizes="(min-width: 1280px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-[700ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]" />
                </Link>
              </div>

              <div className="mt-4 flex items-center justify-between gap-3">
                <span className="font-serif text-[18px] font-medium tracking-[-0.02em] text-charcoal">{collection.name}</span>
                <Link href={`/products/${collection.slug}`} className="inline-flex items-center text-charcoal/60 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                  <ArrowUpRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
