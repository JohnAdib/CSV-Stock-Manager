'use client'

import { IStock, IStockAdd } from '@/interfaces'
import { Button } from '@components/atoms/button'
import { Divider } from '@components/atoms/divider'
import { Subheading } from '@components/atoms/heading'
import { Input } from '@components/atoms/input'
import { Text } from '@components/atoms/text'
import { Textarea } from '@components/atoms/textarea'
import clsx from 'clsx'
import { useEffect, useState } from 'react'

interface IStockItemForm {
  validationErrors?: Record<string, string>
  defaultValues?: IStock
  onSubmit?: (data: IStockAdd) => void
}

export function StockItemForm({
  validationErrors,
  defaultValues,
  onSubmit
}: IStockItemForm) {
  const [formErrors, setFormErrors] = useState<
    Record<string, string> | undefined
  >(undefined)

  // on change validation Error, update the formErrors state, with useEffect
  useEffect(() => {
    console.log('validationErrors', validationErrors)
    setFormErrors(validationErrors)
  }, [validationErrors])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Collect the form data using FormData API
    const formData = new FormData(e.currentTarget)

    // Create an object from the form data
    const data: IStockAdd = {
      quantity: parseInt(formData.get('quantity') as string),
      sku: formData.get('sku') as string,
      description: formData.get('description') as string,
      store: formData.get('store') as string
    }

    // Pass the collected data to the onSubmit handler
    if (onSubmit) {
      onSubmit(data)
    }
  }

  return (
    <form
      method="post"
      className="mx-auto max-w-4xl"
      onSubmit={handleSubmit}
      onReset={() => setFormErrors(undefined)}
    >
      <Divider className="my-2 md:my-4 lg:my-6 lg:mt-6" />

      <section className="grid gap-x-8 gap-y-2 md:gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Quantity *</Subheading>
          <Text className="text-sm sm:text-base">
            Number of items in stock. This will be used to track the stock.
          </Text>
        </div>
        <div className="space-y-2">
          <Input
            aria-label="quantity"
            name="quantity"
            defaultValue={defaultValues?.quantity}
            autoComplete="off"
            type="number"
            min={0}
            max={1000000000000}
            invalid={!!formErrors?.quantity}
          />
          <div className="text-sm text-red-800 dark:text-red-200">
            {formErrors?.quantity}
          </div>
        </div>
      </section>

      <Divider className="my-2 md:my-4 lg:my-6" soft />

      <section className="grid gap-x-8 gap-y-2 md:gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>SKU *</Subheading>
          <Text className="text-sm sm:text-base">
            The Stock Keeping Unit (SKU) is a unique identifier for each item.
          </Text>
        </div>
        <div className="space-y-2">
          <Input
            aria-label="sku"
            name="sku"
            defaultValue={defaultValues?.sku}
            autoComplete="off"
            placeholder="UK-xxxx"
            minLength={0}
            maxLength={20}
            invalid={!!formErrors?.sku}
          />
          <div className="text-sm text-red-800 dark:text-red-200">
            {formErrors?.sku}
          </div>
        </div>
      </section>

      <Divider className="my-2 md:my-4 lg:my-6" soft />
      <section className="grid gap-x-8 gap-y-2 md:gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Description</Subheading>
          <Text className="text-sm sm:text-base">
            A brief description of the item. This will help you identify the
            item.
          </Text>
        </div>
        <div>
          <Textarea
            aria-label="description"
            name="description"
            defaultValue={defaultValues?.description}
            resizable={false}
            rows={3}
            maxLength={1000}
            className={clsx('resize-none')}
            invalid={!!formErrors?.description}
          />
          <div className="text-sm mt-1 text-red-800 dark:text-red-200">
            {formErrors?.description}
          </div>
        </div>
      </section>

      <Divider className="my-2 md:my-4 lg:my-6" soft />

      <section className="grid gap-x-8 gap-y-2 md:gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Store *</Subheading>
          <Text className="text-sm sm:text-base">
            The store where the item is located. 3 characters long.
          </Text>
        </div>
        <div className="space-y-2">
          <Input
            aria-label="store"
            name="store"
            defaultValue={defaultValues?.store}
            autoComplete="off"
            minLength={0}
            maxLength={20}
            invalid={!!formErrors?.store}
          />
          <div className="text-sm mt-1 text-red-800 dark:text-red-200">
            {formErrors?.store}
          </div>
        </div>
      </section>

      <Divider className="my-2 md:my-4 lg:my-6" soft />

      <div className="flex justify-end gap-4">
        {/* { show reset if sku is not exist} */}
        {!defaultValues?.sku && (
          <Button type="reset" plain>
            Reset
          </Button>
        )}
        <Button type="submit" color="sky">
          Save changes
        </Button>
      </div>
    </form>
  )
}
