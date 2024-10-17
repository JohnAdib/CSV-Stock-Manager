'use client'

import { apiFetch } from '@/app/_helper/fetch/api-fetch'
import { apiMessagesAlert } from '@/app/_helper/fetch/api-messages-alert'
import { convertErrorsToObject } from '@/app/_helper/fetch/convert-error-to-object'
import { AddStockItem } from '@/components/stock/add-stock-item'
import { IStockAdd } from '@/interfaces'
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  const addHandler = async (formData: IStockAdd): Promise<void> => {
    const apiRes = await apiFetch({
      url: 'http://localhost:7011/v1/stock',
      method: 'POST',
      body: formData
    })

    apiMessagesAlert({ apiRes })
    const errorObj = convertErrorsToObject({ messages: apiRes.messages })
    console.log('errorObj', errorObj)

    if (apiRes.okay) {
      router.push('/stock')
    }
  }

  return <AddStockItem onSubmit={addHandler} />
}
