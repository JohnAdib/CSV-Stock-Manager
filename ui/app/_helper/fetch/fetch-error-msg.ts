import Swal from 'sweetalert2'

export function fetchErrorMsg(error: unknown): void {
  Swal.fire({
    title: 'Error!',
    text: 'An error occurred!',
    icon: 'error',
    footer: `<pre>${JSON.stringify(error, null, 2)}</pre>`
  })
}
