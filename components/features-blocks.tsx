'use client'
import { motion } from 'framer-motion'

export default function FeaturesBlocks() {
  return (
    <section className="relative">
      <div className="flex flex-col shadow-lg justify-between items-center m-auto max-w-screen-xl w-full px-12 mt-24 rounded-3xl bg-red-700/10 py-16 pb-4">
        <div className="flex pb-10 pt-6 flex-col items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="h3"
          >
            See how Propertly can help
          </motion.div>
          <div className="animate-in slide-in-from-left-20 fade-in-0 duration-500 p text-center pt-6 text-gray-500 font-medium">
            Select from our tailored options to best suit your real <br />{' '}
            estate needs.
          </div>
        </div>
        <div className="flex justify-around w-full">
          <div className="flex flex-col items-center p-16  w-1/3">
            <div className="w-20 h-20 bg-red-100 mb-8"></div>
            <div className="h4">Free pickup</div>
            <div className="p text-center pt-4 text-gray-600">
              Let us know and we'll come for a pickup
            </div>
            <div className="btn text-gray-700 ring-1  ring-black ring-opacity-5 bg-white mt-12 cursor-pointer w-full  hover:bg-[rgba(237, 42, 7, 0.8)] mb-4 ">
              Book a pickup
            </div>
          </div>{' '}
          <div className="flex flex-col items-center shadow-lg w-1/3 bg-white rounded-xl px-16 pt-16 pb-10 h-full">
            <div className="w-20 h-20 bg-red-100 mb-8"></div>
            <div className="h4">Take a look at us</div>
            <div className="p text-center pt-4 text-gray-600">
              Bring your shoes to the nearest branch and feel the vibe
            </div>
            <div className="btn text-white bg-red-700 mt-12 cursor-pointer hover:bg-[rgba(237, 42, 7, 0.8)] w-full ">
              Find branch
            </div>
          </div>{' '}
          <div className="flex flex-col items-center p-16 w-1/3">
            <div className="w-20 h-20 bg-red-100 mb-8"></div>
            <div className="h4">Earn with us</div>
            <div className="p text-center pt-4 text-gray-600">
              Want your own branch? Lets get in touch and open your franchise
            </div>
            <div className="btn text-gray-700 ring-1 ring-black ring-opacity-5 bg-white mt-12 w-full cursor-pointer hover:bg-[rgba(237, 42, 7, 0.8)] mb-4 ">
              Contact us
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
