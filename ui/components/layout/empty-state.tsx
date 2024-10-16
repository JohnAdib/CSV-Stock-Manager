import { PlusIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

interface IEmptyStateProps {
  title: string
  description: string
  btnText: string
  btnHref: string
}

export function EmptyState({
  title,
  description,
  btnText,
  btnHref
}: IEmptyStateProps) {
  return (
    <div className="text-center py-8 md:py-24">
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500"
      >
        <path
          d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
          strokeWidth={2}
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <h3 className="mt-2 text-sm font-semibold text-gray-900 dark:text-gray-100">
        {title}
      </h3>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
      <div className="mt-6">
        <Link
          href={btnHref}
          type="button"
          className="inline-flex items-center rounded-md bg-sky-600 dark:bg-sky-400 px-3 py-2 text-sm font-semibold text-white dark:text-black shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
        >
          <PlusIcon aria-hidden="true" className="-ml-0.5 mr-1.5 h-5 w-5" />
          {btnText}
        </Link>
      </div>
    </div>
  )
}
