'use client'
import { Tab } from '@headlessui/react'
import { motion } from 'framer-motion'
import { PropsWithChildren } from 'react'
import BagIcon from './icons/Bag'
import CleanIcon from './icons/Clean'
import ColoringIcon from './icons/Coloring'
import RepairIcon from './icons/Repair'

const tabs = [
  {
    title: 'Cleaning',
    icon: ({ fill }: { fill: string }) => <CleanIcon fill={fill} />,
    content: [
      {
        title: 'Casual cleaning',
        description: 'testtesttesttesttesttesttesttesttesttesttest',
        price: 10,
        from: true,
      },
      { title: 'Boots cleaning', price: 10 },
      { title: 'Ozone cleaning', price: 10 },
    ],
  },
  {
    title: 'Repair',
    icon: ({ fill }: { fill: string }) => <RepairIcon fill={fill} />,
    content: [
      {
        title: 'Sneakers',
        description: 'testtesttesttesttesttesttesttesttesttesttest',
        price: 10,
      },
      {
        title: 'Sneakers',
        description: 'testtesttesttesttesttesttesttesttesttesttest',
        price: 10,
        from: true,
      },
      {
        title: 'Sneakers',
        description: 'testtesttesttesttesttesttesttesttesttesttest',
        price: 10,
        from: true,
      },
      {
        title: 'Sneakers',
        description: 'testtesttesttesttesttesttesttesttesttesttest',
        price: 10,
        from: true,
      },
      {
        title: 'Sneakers',
        description: 'testtesttesttesttesttesttesttesttesttesttest',
        price: 10,
        from: true,
      },
    ],
  },
  {
    title: 'Custom',
    icon: ({ fill }: { fill: string }) => <ColoringIcon fill={fill} />,
    content: [
      { title: 'Sneakers', price: 10 },
      {
        title: 'Sneakers',
        description: 'testtesttesttesttesttesttesttesttesttesttest',
        price: 10,
        from: true,
      },
      { title: 'Sneakers', price: 10, from: true },
      {
        title: 'Sneakers',
        description: 'testtesttesttesttesttesttesttesttesttesttest',
        price: 10,
        from: true,
      },
    ],
  },
  {
    title: 'Bags',
    icon: ({ fill }: { fill: string }) => <BagIcon fill={fill} />,
    content: [{ title: 'Sneakers', price: 10 }],
  },
]

const TabItem = ({
  children,
  icon: Icon,
}: PropsWithChildren<{ icon: () => JSX.Element }>) => {
  return (
    <Tab className="relative ring-0 outline-none font-medium">
      {({ selected }) => (
        <div
          className={`w-24 py-1 px-3 items-center flex flex-col justify-between ${
            selected
              ? 'bg-red-700 text-white rounded-lg transition duration-200 ring-1 ring-gray-300 shadow-lg'
              : 'bg-transparent text-gray-700 '
          }`}
        >
          {/* @ts-ignore */}
          <Icon fill={selected ? '#ffffff' : '#212121'} />
          <span className="pt-1">{children}</span>
        </div>
      )}
    </Tab>
  )
}

export default function Prices() {
  return (
    <section className="relative">
      <div className="flex flex-col justify-between items-center m-auto max-w-screen-xl px-12 mt-24 pt-12 pb-12 shadow-lg bg-gray-700/5 rounded-3xl sm:w-11/12 md:w-4/5 lg:w-3/5 xl:w-6/12">
        <div className="flex pb-10 pt-6 flex-col items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="h3"
          >
            Check the prices
          </motion.div>
        </div>
        <Tab.Group defaultIndex={0}>
          <Tab.List className="flex justify-between sm:w-10/12 mb-8 px-7 py-4 bg-white rounded-xl shadow-lg ring-1 ring-gray-200 md:w-8/12 lg:w-6/12">
            {tabs.map(({ title, icon }) => (
              // @ts-ignore
              <TabItem icon={icon}>{title}</TabItem>
            ))}
          </Tab.List>
          <Tab.Panels className="">
            {tabs.map(({ content }) => (
              <Tab.Panel className="grid md:grid-cols-2 sm:grid-cols-1 gap-x-32 gap-y-8 py-10 items-center bg-white box-border p-10 rounded-xl shadow-lg ring-1 ring-gray-200">
                {content.map(({ title, price, description, from }) => (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-[320px] flex justify-between items-center relative before:content-[''] before:h-full before:absolute before:bg-red-700 before:w-1 before:rounded-lg before:left-[-12px]"
                  >
                    <div className="flex flex-col">
                      <div className="text-gray-900 pr-8">{title}</div>
                      {description && (
                        <div className="text-gray-500 pr-8 text-sm break-words w-[260px]">
                          {description}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center">
                      {from && (
                        <div className="text-xs text-gray-500 pr-1">from</div>
                      )}
                      <div className="text-red-700 font-medium ">${price}</div>
                    </div>
                  </motion.div>
                ))}
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </section>
  )
}
