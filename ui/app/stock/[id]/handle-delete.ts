import { apiFetch, apiNotification } from '@/app/_helper/fetch'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'
import Swal from 'sweetalert2'

const deleteHandler = async ({ id }: { id: number }): Promise<boolean> => {
  try {
    const apiResponse = await apiFetch({
      url: 'http://localhost:7011/v1/stock/' + id,
      method: 'DELETE'
    })
    apiNotification({ apiResponse })
  } catch (error) {
    Swal.fire('Error!', 'Failed to delete!', 'error')
    console.error('Failed to delete', error)
  }
  return true
}

export const handleDelete = ({
  id,
  router
}: {
  id: number | undefined
  router: AppRouterInstance
}) => {
  if (!id) {
    return
  }
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this! You are about to delete id " + id,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      deleteHandler({ id })
      router.push('/stock')
    }
  })
}
