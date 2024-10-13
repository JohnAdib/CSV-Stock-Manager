'use client'

import { Button } from '../atoms/button'
import { Heading, Subheading } from '../atoms/heading'

interface IPageHeader {
  title: string
  description: string
  btnText: string
  btnHref: string
  btnAction?: () => void
  btnColor?: 'sky' | 'red'
}

export function PageHeader({
  title,
  description,
  btnText,
  btnHref,
  btnColor = 'sky',
  btnAction
}: IPageHeader) {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <Heading>{title}</Heading>
          <Subheading level={2} color="gray">
            {description}
          </Subheading>
        </div>
        <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
          <Button href={btnHref} onClick={btnAction} color={btnColor}>
            {btnText}
          </Button>
        </div>
      </div>
    </div>
  )
}
