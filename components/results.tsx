'use client'
import { motion } from 'framer-motion'

export default function Results() {
  return (
    <section className="relative">
      <div className="flex flex-col justify-between items-center m-auto max-w-screen-xl w-full px-12 mt-24 rounded-3xl py-1 pb-4">
        <div className="flex pb-10 pt-6 flex-col items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="h3 mb-16"
          >
            Take a look at our results
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-32 gap-y-8">
          <div className="relative w-96 h-56">
            <div className="cursor-pointer absolute top-0 left-0 w-full h-full bg-[url('/images/after.jpeg')] bg-[length:384px_100%] mt-1 peer"></div>
            <div className="cursor-pointer absolute top-0 left-0 w-1/2 h-full bg-[url('/images/before.jpeg')] bg-[length:384px_100%] peer-hover:w-0 hover:w-full transition-[width] duration-300"></div>
          </div>
          <div className="relative w-96 h-56">
            <div className="cursor-pointer absolute top-0 left-0 w-full h-full bg-[url('/images/after1.jpeg')] bg-[length:384px_100%] mt-1 peer"></div>
            <div className="cursor-pointer absolute top-0 left-0 w-1/2 h-full bg-[url('/images/before1.jpeg')] bg-[length:384px_100%] peer-hover:w-0 hover:w-full transition-[width] duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
