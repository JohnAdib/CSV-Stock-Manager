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

    if (apiRes?.okay) {
      router.push('/stock')
    }
  }

  return (
    <StockItemForm
      onSubmit={addHandler}
      validationErrors={apiRes?.validation}
    />
  )
}
