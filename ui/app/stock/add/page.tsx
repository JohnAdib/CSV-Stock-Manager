'use client'

import { apiFetch, apiNotification } from '@/app/_helper/fetch'
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

    console.log('add api response', apiResponse)

    if (apiRes?.okay) {
      console.log('add api response okay, redirecting')
      router.push('/stock')
    }
  }

  return (
    <StockItemForm
      validationErrors={apiRes?.validation}
      onSubmit={addHandler}
    />
  )
}
