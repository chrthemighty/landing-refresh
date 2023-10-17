'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import FeaturesBg from '@/public/images/features-bg.png'
import FeaturesElement from '@/public/images/features-element.png'
import { css } from '@/utils/helpers'
import { motion } from 'framer-motion'

export default function Features() {
  return (
    <section className="relative w-full flex justify-between pt-32">
      <div className="flex justify-between items-center m-auto max-w-screen-xl w-full px-12">
        <div className="flex flex-col">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="h1 text-gray-900"
          >
            Revive Your Wardrobe
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="p text-gray-500 text-lg font-medium pt-4"
          >
            Step into a world of garment transformation <br /> and unparalleled
            fabric care.
          </motion.div>
          <div className="flex">
            <div className="btn text-white bg-red-700 mt-12 cursor-pointer hover:bg-[rgba(237, 42, 7, 0.8)] w-full mb-4 sm:w-auto sm:mb-0">
              Book a pickup
            </div>
            <div className="btn text-gray-700 ring-1 ml-4 ring-black ring-opacity-5 bg-white mt-12 cursor-pointer hover:bg-[rgba(237, 42, 7, 0.8)] w-full mb-4 sm:w-auto sm:mb-0">
              Check the prices
            </div>
          </div>
          <div className="w-full h-[2px] bg-gray-100 rounded-md my-8"></div>
          <div className="flex w-full justify-around">
            <div className="flex flex-col w-36">
              <div className="text-2xl text-red-700 font-bold">1000+</div>
              <div className="text-gray-400 text-sm font-medium pt-1">
                Happy sneakerheads all over the world
              </div>
            </div>
            <div className="flex flex-col  w-28">
              <div className="text-2xl text-red-700 font-bold">20+</div>
              <div className="text-gray-400 text-sm font-medium pt-1">
                Countries we are working at
              </div>
            </div>
            <div className="flex flex-col  w-36">
              <div className="text-2xl text-red-700 font-bold">Free Pickup</div>
              <div className="text-gray-400 text-sm font-medium pt-1">
                We’ll come to you
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <Image
            src="/images/DSC08940-3.webp"
            width={600}
            height={600}
            alt={'asd'}
          />
        </div>
      </div>
    </section>
  )
}
