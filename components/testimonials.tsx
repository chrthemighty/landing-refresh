'use client'
import { StarIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'

export default function Testimonals() {
  return (
    <section className="relative">
      <div className="flex flex-col justify-between items-center m-auto max-w-screen-xl px-12 mt-24 pt-12 pb-12 sm:w-11/12 md:w-4/5 lg:w-3/5 xl:w-6/12">
        <div className="flex pt-6 flex-col items-center pb-96">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="h3"
          >
            Customers say about us
          </motion.div>
        </div>
        <div className="flex absolute left-1/4 pt-32">
          {Array.from({ length: 10 }).map((_, i) => (
            <div className="flex flex-col  w-96 p-8 shadow-lg rounded-2xl ring-1 ring-gray-200 mr-8">
              <div className="flex items-center pb-6">
                <div className="w-20 h-20 rounded-full bg-red-300 pb-4 mr-4"></div>
                <div className="flex flex-col">
                  <div className="text-lg font-medium text-gray-900">
                    Jerome Bell
                  </div>
                  <div className="text-sm text-gray-500">Antalya Branch</div>
                </div>
              </div>
              <div className="p text-gray-900">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptatum maiores cupiditate aliquam at consequuntur, ut
                tempora commodi! Debitis, non similique! Eum, et laborum
                provident eaque odit totam optio at voluptate.
              </div>
              <div className="mt-6 flex">
                <StarIcon className="w-8 h-8 fill-yellow-400" />
                <StarIcon className="w-8 h-8 fill-yellow-400" />
                <StarIcon className="w-8 h-8 fill-yellow-400" />
                <StarIcon className="w-8 h-8 fill-yellow-400" />
                <StarIcon className="w-8 h-8 fill-yellow-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
