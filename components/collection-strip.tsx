"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"

const collections = [
  {
    id: "seamless-loop",
    name: "SEAMLESS LOOP",
    image: "/modern-armchair-pillows.png",
    video: "https://assets.tranthor.com/lopify/Video/Seamless%20Loop.mp4",
    count: "Perfect loops",
  },
  {
    id: "cinematic-zoom",
    name: "CINEMATIC ZOOM",
    image: "/modular-cushion-bench.png",
    video: "https://assets.tranthor.com/lopify/Video/cinematic%20zoom.mp4",
    count: "Dramatic focus",
  },
  {
    id: "smooth-pan",
    name: "SMOOTH PAN",
    image: "/cloud-white-sofa.png",
    video: "https://assets.tranthor.com/lopify/Video/smooth%20pan.mp4",
    count: "Horizontal flow",
  },
  {
    id: "object-orbit",
    name: "OBJECT ORBIT",
    image: "/distressed-artistic-chair.png",
    video: "https://assets.tranthor.com/lopify/Video/Object%20Orbit.mp4",
    count: "360 rotation",
  },
  {
    id: "time-lapse",
    name: "TIME-LAPSE",
    image: "/green-modular-loveseat.png",
    video: "https://assets.tranthor.com/lopify/Video/Time%20lapse.mp4",
    count: "Speed effects",
  },
  {
    id: "vhs-glitch",
    name: "VHS GLITCH",
    image: "/braided-rope-loveseat.png",
    video: "https://assets.tranthor.com/lopify/Video/VHS%20glitch.mp4",
    count: "Retro vibes",
  },
  {
    id: "floating-particles",
    name: "FLOATING PARTICLES",
    image: "/colorful-patchwork-sofa.png",
    video: "https://assets.tranthor.com/lopify/Video/floating%20particles.mp4",
    count: "Ambient dust",
  },
  {
    id: "light-leaks",
    name: "LIGHT LEAKS",
    image: "/minimalist-boucle-loveseat.png",
    video: "https://assets.tranthor.com/lopify/Video/light%20leaks..mp4",
    count: "Film aesthetic",
  },
  {
    id: "cinematic-dust",
    name: "CINEMATIC DUST",
    image: "/abstract-artistic-sofa.png",
    video: "https://assets.tranthor.com/lopify/Video/cinematic%20Dust.mp4",
    count: "Moody atmosphere",
  },
  {
    id: "static-disturbance",
    name: "STATIC DISTURBANCE",
    image: "/textured-cream-loveseat.png",
    video: "https://assets.tranthor.com/lopify/Video/static%20disturbance.mp4",
    count: "Digital noise",
  },
]

export function CollectionStrip() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], [0, -100])

  const itemWidth = 320 // 320px (w-80) + 32px gap = 352px per item
  const totalWidth = collections.length * (itemWidth + 32) - 32 // subtract last gap
  const containerWidth = typeof window !== "undefined" ? window.innerWidth : 1200
  const maxDrag = Math.max(0, totalWidth - containerWidth + 48) // add padding

  return (
    <section ref={containerRef} id="collections" className="py-20 lg:py-32 overflow-hidden">
      <div className="mb-12">
        <Reveal>
          <div className="container-custom text-center">
            <h2 className="text-neutral-900 mb-4 text-6xl font-normal">Style Templates</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Choose from our curated motion styles, each designed to captivate your audience and boost engagement.
            </p>
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <motion.div
          className="flex gap-8 px-6"
          style={{ x }}
          drag="x"
          dragConstraints={{ left: -maxDrag, right: 0 }}
          dragElastic={0.1}
        >
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              className="flex-shrink-0 w-80 group cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                <motion.div
                  className="relative w-full h-full"
                  whileHover={{ filter: "blur(1px)" }}
                  transition={{ duration: 0.3 }}
                >
                  {collection.video ? (
                    <video
                      src={collection.video}
                      className="w-full h-full object-cover"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={collection.name}
                    />
                  ) : (
                    <Image
                      src={collection.image || "/placeholder.svg"}
                      alt={collection.name}
                      fill
                      className="object-cover"
                      sizes="320px"
                    />
                  )}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300" />
                </motion.div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="text-center text-white"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-3xl font-bold tracking-wider mb-2">{collection.name}</h3>
                    <p className="text-sm opacity-90">{collection.count}</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <div className="text-center mt-8">
        <p className="text-sm text-neutral-500">← Drag to explore styles →</p>
      </div>
    </section>
  )
}
