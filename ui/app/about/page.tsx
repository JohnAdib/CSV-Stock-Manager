import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon
} from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Upload and Process CSV Files',
    description:
      'Quickly upload stock data in bulk through CSV files. The app ensures proper validation and logs any errors or issues during the upload process.',
    icon: CloudArrowUpIcon
  },
  {
    name: 'Manage Stock Items',
    description:
      'Easily add, update, or delete individual stock items. Keep your inventory up to date with an intuitive interface for quick management.',
    icon: LockClosedIcon
  },
  {
    name: 'Seamless integration',
    description:
      'Built on Next.js and Node.js, the app ensures smooth communication between the front end and back end, offering fast development experience.',
    icon: ArrowPathIcon
  },
  {
    name: 'Mobile-friendly design',
    description:
      'The app is optimized for use on both desktop and mobile devices, ensuring a seamless experience on the go.',
    icon: FingerPrintIcon
  }
]

export default function Page() {
  return (
    <div className="py-6 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-sky-600 dark:text-sky-400">
            Manage Stock with Ease
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-gray-100">
            CSV Stock Manager
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            This CSV Stock Manager allows you to easily upload, view, and manage
            stock data from CSV files. Built with Next.js and Prisma, it
            simplifies the process of handling inventory data with validation
            and error handling for smooth operations.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                    <feature.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
