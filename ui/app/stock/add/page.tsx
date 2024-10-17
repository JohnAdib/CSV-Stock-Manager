'use client'

import { apiFetch, apiNotification } from '@/app/_helper/fetch'
import { PageHeader } from '@/components/layout/page-header'
import { StockItemForm } from '@/components/stock/stock-item-form'
import { IResponseJson, IStockAdd } from '@/interfaces'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const router = useRouter()
  const [apiRes, setApiRes] = useState<IResponseJson | null>(null)

  const addHandler = async (formData: IStockAdd): Promise<void> => {
    const apiResponse = await apiFetch({
      url: 'http://localhost:7011/v1/stock',
      method: 'POST',
      body: formData
    })

    setApiRes(apiResponse)
    apiNotification({ apiResponse })

    if (apiResponse?.okay) {
      router.push('/stock')
    }
  }

  return (
    <>
      <PageHeader
        title="Stock Item"
        description="Add a new item to the stock."
        btnText="List of Stock Items"
        btnHref="/stock"
        btnColor="dark/zinc"
      />
      <StockItemForm
        validationErrors={apiRes?.validation}
        onSubmit={addHandler}
      />
    </>
  )
}
