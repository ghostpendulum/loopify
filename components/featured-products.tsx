"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ProductCard } from "./product-card"
import { QuickLookModal } from "./quick-look-modal"
import { Reveal } from "./reveal"

const featuredProducts = [
  {
    id: "1",
    name: "Landscape",
    price: "16:9",
    image: "https://assets.tranthor.com/lopify/Screenshot%202026-05-08%20at%205.03.57%E2%80%AFPM.png",
    overlay: "linear-gradient(160deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.55) 100%)",
    badge: "Linkedin" as const,
    materials: ["1080p", "8 seconds"],
    swatches: [
      { name: "Seamless Loop", color: "#355E3B" },
      { name: "Cinematic Zoom", color: "#9CAF88" },
      { name: "Smooth Pan", color: "#B87333" },
    ],
    quickLookImages: [
      "https://assets.tranthor.com/lopify/Screenshot%202026-05-08%20at%205.03.57%E2%80%AFPM.png",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    dimensions: "1920 x 1080px",
  },
  {
    id: "2",
    name: "Reels",
    price: "9:16",
    image: "https://assets.tranthor.com/lopify/Screenshot%202026-05-08%20at%205.05.25%E2%80%AFPM.png",
    overlay: "linear-gradient(160deg, rgba(10,0,40,0.22) 0%, rgba(10,0,40,0.62) 100%)",
    badge: "Instagram" as const,
    materials: ["1080p", "8 seconds"],
    swatches: [
      { name: "Object Orbit", color: "#E2725B" },
      { name: "Time-lapse", color: "#CC5500" },
      { name: "VHS Glitch", color: "#B87333" },
    ],
    quickLookImages: [
      "https://assets.tranthor.com/lopify/Screenshot%202026-05-08%20at%205.05.25%E2%80%AFPM.png",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    dimensions: "1080 x 1920px",
  },
  {
    id: "3",
    name: "Square",
    price: "1:1",
    image: "https://assets.tranthor.com/lopify/Screenshot%202026-05-08%20at%205.09.02%E2%80%AFPM.png",
    overlay: "linear-gradient(160deg, rgba(60,10,5,0.15) 0%, rgba(20,0,0,0.58) 100%)",
    badge: "X" as const,
    materials: ["4K", "8 seconds"],
    swatches: [
      { name: "Light Leaks", color: "#9CAF88" },
      { name: "Floating Particles", color: "#355E3B" },
      { name: "Cinematic Dust", color: "#B87333" },
    ],
    quickLookImages: [
      "https://assets.tranthor.com/lopify/Screenshot%202026-05-08%20at%205.09.02%E2%80%AFPM.png",
      "/placeholder.svg?height=600&width=600",
      "/placeholder.svg?height=600&width=600",
    ],
    dimensions: "1080 x 1080px",
  },
]

export function FeaturedProducts() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleQuickLook = (product: any) => {
    setSelectedProduct(product)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  return (
    <section className="py-20 lg:py-32" id="featured">
      <div className="container-custom">
        <Reveal>
          <div className="text-left mb-16">
            <h2 className="text-4xl text-neutral-900 mb-4 lg:text-6xl">
              Export <span className="italic font-light">Presets</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl">
              Ready-to-use video formats optimized for every major social platform. Just upload, generate, and download.
            </p>
          </div>
        </Reveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.8,
                    ease: [0.21, 0.47, 0.32, 0.98],
                  },
                },
              }}
            >
              <Reveal delay={index * 0.1}>
                <ProductCard product={product} onQuickLook={handleQuickLook} />
              </Reveal>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <QuickLookModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />
    </section>
  )
}
