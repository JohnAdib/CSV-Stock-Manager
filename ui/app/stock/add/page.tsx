'use client'

import { apiFetch, apiNotification } from '@/app/_helper/fetch'
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

    apiNotification({ apiRes })

    console.log('errorObj', apiRes.validation)

    if (apiRes.okay) {
      router.push('/stock')
    }
  }

  return <AddStockItem onSubmit={addHandler} />
}
