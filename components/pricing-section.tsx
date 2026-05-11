"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Reveal } from "./reveal";
import { getStudioAuthUrl } from "@/lib/site";

const PLANS = [
  {
    id: "starter",
    name: "Starter",
    priceUsdMonth: 29,
    monthlyCredits: 20,
  },
  {
    id: "growth",
    name: "Growth",
    priceUsdMonth: 99,
    monthlyCredits: 100,
  },
] as const;

const TOPUPS = [
  { name: "Small", priceUsd: 19, credits: 15 },
  { name: "Medium", priceUsd: 49, credits: 50 },
  { name: "Large", priceUsd: 99, credits: 120 },
] as const;

export const PricingSection = () => {
  const studioSignup = getStudioAuthUrl("signup");
  const studioLogin = getStudioAuthUrl("login");

  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-white border-y border-neutral-200">
      <div className="container-custom">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight mb-4">Simple pricing</h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Sign up free and open Amplift AI Studio. Paid plans add monthly video credits; top-ups available inside the app.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto">
          <Reveal delay={0.05}>
            <motion.div
              className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 flex flex-col h-full shadow-sm"
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wide mb-2">Try free</p>
              <h3 className="text-2xl font-bold text-neutral-900 mb-2">Sign up free</h3>
              <p className="text-neutral-600 text-sm leading-relaxed mb-6 flex-1">
                Create an account in Amplift AI Studio at no cost. Generations use credits—add a plan or top-up when you are ready.
              </p>
              <ul className="space-y-3 mb-8">
                {["Full generator and presets", "LinkedIn, X, and Instagram formats", "Manage billing in the app"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={studioSignup}
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-neutral-900 text-white text-sm font-semibold px-6 py-3 hover:bg-neutral-800 transition-colors"
              >
                Create free account
              </a>
              <p className="text-xs text-neutral-500 mt-4 text-center">
                Already have an account?{" "}
                <a href={studioLogin} rel="noopener noreferrer" className="text-neutral-900 font-medium underline-offset-2 hover:underline">
                  Log in
                </a>
              </p>
            </motion.div>
          </Reveal>

          {PLANS.map((plan, index) => (
            <Reveal key={plan.id} delay={0.1 + index * 0.05}>
              <motion.div
                className="rounded-2xl border border-neutral-900 bg-neutral-900 text-white p-8 flex flex-col h-full shadow-lg"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-2">{plan.name}</p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-bold">${plan.priceUsdMonth}</span>
                  <span className="text-white/80 text-sm">/month</span>
                </div>
                <p className="text-white/80 text-sm mb-6 flex-1">{plan.monthlyCredits} video credits per month, billed in the app via Polar.</p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2 text-sm text-white/90">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                    Same features as free signup
                  </li>
                  <li className="flex items-start gap-2 text-sm text-white/90">
                    <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden />
                    Credits renew each billing cycle
                  </li>
                </ul>
                <a
                  href={studioSignup}
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-white text-neutral-900 text-sm font-semibold px-6 py-3 hover:bg-white/90 transition-colors"
                >
                  Open app to subscribe
                </a>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-12 max-w-3xl mx-auto text-center">
            <p className="text-sm text-neutral-600 mb-2">One-time top-ups (inside the app)</p>
            <p className="text-sm text-neutral-500">
              {TOPUPS.map((t, i) => (
                <span key={t.name}>
                  {t.name}: ${t.priceUsd} / {t.credits} credits
                  {i < TOPUPS.length - 1 ? " · " : ""}
                </span>
              ))}
            </p>
            <p className="text-xs text-neutral-400 mt-4">
              Prices match <span className="text-neutral-600">Amplift AI Studio</span> checkout.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
