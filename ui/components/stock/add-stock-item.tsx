'use client'

import { IStockAdd } from '@/interfaces'
import { Button } from '@components/atoms/button'
import { Divider } from '@components/atoms/divider'
import { Heading, Subheading } from '@components/atoms/heading'
import { Input } from '@components/atoms/input'
import { Text } from '@components/atoms/text'
import { Textarea } from '@components/atoms/textarea'
import clsx from 'clsx'

interface IAddStockItem {
  onSubmit: (data: IStockAdd) => void
}

export function AddStockItem({ onSubmit }: IAddStockItem) {
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
    onSubmit(data)
  }

  return (
    <form method="post" className="mx-auto max-w-4xl" onSubmit={handleSubmit}>
      <Heading>Add New Stock Item</Heading>
      <Divider className="my-10 mt-6" />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Quantity</Subheading>
          <Text>
            Number of items in stock. This will be used to track the stock.
          </Text>
        </div>
        <div>
          <Input
            aria-label="quantity"
            name="quantity"
            defaultValue=""
            autoComplete="off"
            type="number"
            min={0}
            max={1000000000000}
          />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>SKU</Subheading>
          <Text>
            The Stock Keeping Unit (SKU) is a unique identifier for each item.
          </Text>
        </div>
        <div className="space-y-4">
          <Input
            aria-label="sku"
            name="sku"
            autoComplete="off"
            placeholder="UK-xxxx"
            minLength={0}
            maxLength={20}
          />
        </div>
      </section>

      <Divider className="my-10" soft />
      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Description</Subheading>
          <Text>
            A brief description of the item. This will help you identify the
            item.
          </Text>
        </div>
        <div>
          <Textarea
            aria-label="description"
            name="description"
            resizable={false}
            rows={3}
            maxLength={1000}
            className={clsx('resize-none')}
          />
        </div>
      </section>

      <Divider className="my-10" soft />

      <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
        <div className="space-y-1">
          <Subheading>Store</Subheading>
          <Text>The store where the item is located. 3 characters long.</Text>
        </div>
        <div className="space-y-4">
          <Input
            aria-label="store"
            name="store"
            autoComplete="off"
            minLength={0}
            maxLength={20}
          />
        </div>
      </section>

      <Divider className="my-10" soft />

      <div className="flex justify-end gap-4">
        <Button type="reset" plain>
          Reset
        </Button>
        <Button type="submit" color="sky">
          Save changes
        </Button>
      </div>
    </form>
  )
}
