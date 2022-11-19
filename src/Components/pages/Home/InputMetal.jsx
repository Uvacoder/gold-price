import { Fragment, useEffect, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

const metals = [
  {
    id: 1,
    name: 'GOLD',
    symbol: 'XAU'
  },
  {
    id: 2,
    name: 'Silver',
    symbol: 'XAG'
  },
  {
    id: 3,
    name: 'Platinum',
    symbol: 'XPT'
  },
  {
    id: 4,
    name: 'Palladium',
    symbol: 'XPD'
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example(props) {
  const [selected, setSelected] = useState(metals[0])
  useEffect(()=>{
    props.handleMetal(selected.symbol);
  },[selected])

  return (
    <>
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          {/* <Listbox.Label className="block text-sm font-medium text-gray-700">Metal :</Listbox.Label> */}
          <div className="relative mt-1 md:w-3/12">
            <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
              <span className="flex items-center">
              <img src={`https://s3-symbol-logo.tradingview.com/metal/${selected.name.toLowerCase()}.svg`} className="h-6 flex-shrink-0 mr-2"></img>
              <span className='font-bold'>{selected.symbol}</span>
                <span className="ml-3 block truncate">{selected.name}</span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {metals.map((metal) => (
                  <Listbox.Option
                    key={metal.id}
                    className={({ active }) =>
                      classNames(
                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                        'relative cursor-default select-none py-2 pl-3 pr-9'
                      )
                    }
                    value={metal}

                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center">
                        <img src={`https://s3-symbol-logo.tradingview.com/metal/${metal.name.toLowerCase()}.svg`} className="h-6 flex-shrink-0 mr-2"></img>

                          <span className='font-bold'>{metal.symbol}</span>
                          <span
                            className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                          >
                            {metal.name}
                          </span>
                        </div>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? 'text-white' : 'text-indigo-600',
                              'absolute inset-y-0 right-0 flex items-center pr-4'
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
    </>
  )
}
