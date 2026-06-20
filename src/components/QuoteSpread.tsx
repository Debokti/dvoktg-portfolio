'use client'

import { motion } from 'framer-motion'

export function QuoteSpread() {
  return (
    <section className="relative py-32 overflow-hidden flex items-center justify-center border-t border-[rgba(255,255,255,0.05)] border-b">
      {/* Massive quotation mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20rem] md:text-[30rem] leading-none font-serif text-white opacity-5 select-none pointer-events-none">
        &ldquo;
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl mx-auto text-center px-6"
      >
        <blockquote
          className="text-[24px] md:text-[34px] lg:text-[46px] tracking-wide text-balance leading-normal italic"
          style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--text)' }}
        >
          &ldquo;AI will only replace the developers who mistake typing for engineering. When algorithms can generate the syntax in seconds, our true value shifts from writing code to <span className="text-[#b265ff] font-semibold" style={{ fontFamily: 'var(--font-cormorant)' }}>architecting</span> the systems that give that code purpose. The future belongs to those who stop overengineering against the machine, and start <span className="text-[#b265ff] font-semibold" style={{ fontFamily: 'var(--font-cormorant)' }}>orchestrating </span> it.&rdquo;
        </blockquote>
        {/* <div
          className="mt-8 text-base md:text-lg tracking-widest uppercase font-bold text-gray-500"
          style={{ fontFamily: 'var(--font-cormorant)' }}
        >
          — DEBOKTI GHOSH
        </div> */}
      </motion.div>
    </section>
  )
}
