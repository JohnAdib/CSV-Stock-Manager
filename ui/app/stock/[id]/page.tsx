'use client'

import { apiFetch } from '@/app/_helper/fetch'
import { StockItemForm } from '@/components/stock/stock-item-form'
import { IStockAdd } from '@/interfaces'
import { useEffect, useState } from 'react'

export default function Page({ params }: { params: { id: string } }) {
  const [itemData, setItemData] = useState<IStockAdd | undefined>(undefined)
  const itemId = parseInt(params.id, 10)

  useEffect(() => {
    console.log('fetching item data for id', itemId)
    apiFetch({
      url: 'http://localhost:7011/v1/stock/' + itemId,
      method: 'GET'
    }).then((res) => {
      setItemData(res.result)
    })
  }, [])

  return (
    <StockItemForm
      // validationErrors={apiRes?.validation}
      // onSubmit={addHandler}
      defaultValues={itemData}
    />
  )
}
