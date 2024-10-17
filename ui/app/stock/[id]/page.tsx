'use client'

import { apiFetch } from '@/app/_helper/fetch'
import { EmptyState } from '@/components/layout/empty-state'
import { Loading } from '@/components/layout/loading'
import { PageHeader } from '@/components/layout/page-header'
import { StockItemForm } from '@/components/stock/stock-item-form'
import { IStock } from '@/interfaces'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { handleDelete } from './handle-delete'

export default function Page({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [itemData, setItemData] = useState<IStock | undefined>(undefined)
  const itemId = parseInt(params.id, 10)

  useEffect(() => {
    console.log('fetching item data for id', itemId)
    apiFetch({
      url: 'http://localhost:7011/v1/stock/' + itemId,
      method: 'GET'
    }).then((res) => {
      setItemData(res.result)
    })
  }, [itemId])

  if (itemData === undefined) {
    return <Loading />
  }

  if (itemData === null) {
    return (
      <EmptyState
        title="This item does not exist!"
        description="Please check the item ID and try again or create a new item."
        btnHref="/stock"
        btnText="List of Stock Items"
      />
    )
  }

  return (
    <>
      <PageHeader
        title={'Edit stock item' + ' ' + itemData?.id}
        description="Feel free to edit the stock item details"
        btnText="Delete item"
        btnHref=""
        btnColor="red"
        btnAction={() =>
          handleDelete({
            id: itemData?.id,
            router
          })
        }
      />
      <StockItemForm
        // validationErrors={apiRes?.validation}
        // onSubmit={addHandler}
        defaultValues={itemData}
      />
    </>
  )
}
