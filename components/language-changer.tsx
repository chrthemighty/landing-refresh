'use client'

import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useChangeLocale, useCurrentLocale } from '@/app/locales/client'
import RuIcon from './icons/Ru'
import EnIcon from './icons/En'
import TrIcon from './icons/Tr'
import { css } from '@/utils/helpers'

type Language = 'tr' | 'en' | 'ru'
type LanguageItem = { title: string; code: Language; flag: () => JSX.Element }

const lanugages: LanguageItem[] = [
  {
    title: 'Türkçe',
    code: 'tr',
    flag: () => <TrIcon />,
  },
  {
    title: 'English',
    code: 'en',
    flag: () => <EnIcon />,
  },
  {
    title: 'Русский',
    code: 'ru',
    flag: () => <RuIcon />,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function LanguageChanger() {
  const changeLanguage = useChangeLocale()
  const locale = useCurrentLocale()

  const CurrentFlag = lanugages.find((language) => language.code === locale)
    ?.flag as () => JSX.Element

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          style={css('transition: background-color, box-shadow 0.2s ease;')}
          className="flex  ring-gray-300 items-center bg-white text-sm font-semibold text-gray-900 w-[42px] rounded-md p-1 pr-0 hover:bg-gray-50 hover:ring-1"
        >
          <div className="rounded-[4px] overflow-hidden">
            <CurrentFlag />
          </div>

          <ChevronDownIcon
            width={16}
            height={16}
            color="#252525"
            strikethroughThickness={10}
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {lanugages.map(({ title, code, flag: Flag }) => (
              <Menu.Item key={code}>
                {({ active }) => {
                  const onClick = () => {
                    changeLanguage(code)
                  }

                  return (
                    <div
                      onClick={onClick}
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'px-4 py-2 text-sm cursor-pointer font-medium flex items-center'
                      )}
                    >
                      <div className="rounded-[4px] overflow-hidden">
                        <Flag />
                      </div>
                      <div className="ml-2">{title}</div>
                    </div>
                  )
                }}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
