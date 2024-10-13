'use client'

import { AddStockItem } from '@/components/stock/add-stock-item'
import { IStockAdd } from '@/interfaces'
import { useRouter } from 'next/navigation'
import Swal from 'sweetalert2'

export default function Page() {
  const router = useRouter()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addHandler = async (formData: IStockAdd): Promise<boolean> => {
    console.log('formData', formData)
    try {
      Swal.fire({
        title: 'Success!',
        text: 'A new stock item has been added!',
        icon: 'success'
      })
      router.push('/stock')
    } catch (error: unknown) {
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred!',
        icon: 'error',
        footer: `<pre>${JSON.stringify(error, null, 2)}</pre>`
      })
      return false
    }
    return true
  }

  return (
    <>
      <AddStockItem onSubmit={addHandler} />
    </>
  )
}
