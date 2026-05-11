"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { getStudioAuthUrl } from "@/lib/site"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "backdrop-blur-md border-b border-white/[0.02]",
        isScrolled ? "bg-white/[0.02]" : "bg-white/[0.02]",
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-12 lg:h-16">
          {/* Logo */}
          <motion.div className="flex-shrink-0" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
            <a
              href="/"
              className={cn(
                "text-xl lg:text-2xl font-bold tracking-tight transition-colors",
                isScrolled ? "text-neutral-900 hover:text-neutral-700" : "text-white hover:text-white/80",
              )}
              aria-label="Amplift Home"
            >
              AMPLIFT
            </a>
          </motion.div>

          {/* Auth Buttons */}
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href={getStudioAuthUrl("login")}
              rel="noopener noreferrer"
              className={cn(
                "text-sm font-medium px-4 py-2 rounded-full transition-all duration-200",
                isScrolled
                  ? "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100"
                  : "text-white/90 hover:text-white hover:bg-white/10",
              )}
            >
              Log in
            </a>
            <a
              href={getStudioAuthUrl("signup")}
              rel="noopener noreferrer"
              className={cn(
                "text-sm font-medium px-4 py-2 rounded-full transition-all duration-200",
                isScrolled
                  ? "bg-neutral-900 text-white hover:bg-neutral-700"
                  : "bg-white text-neutral-900 hover:bg-white/90",
              )}
            >
              Sign up
            </a>
          </motion.div>
        </div>
      </div>
    </motion.header>
  )
}
