import { apiFetch, apiNotification } from '@/app/_helper/fetch'
import { apiUrlStockV1 } from '@/app/_helper/url/stock'
import { ArrowUpTrayIcon } from '@heroicons/react/24/solid'

export function FileUploaderInput() {
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = event.target.files?.[0] || null

    if (!selectedFile) {
      return
    }

    const formData = new FormData()
    formData.append('csv', selectedFile)

    const apiResponse = await apiFetch({
      method: 'POST',
      url: apiUrlStockV1 + '/upload',
      body: formData,
      stringify: false
    })
    apiNotification({ apiResponse })
  }

  return (
    <div className="col-span-full select-none">
      <label
        htmlFor="file-upload"
        className="block text-sm font-medium leading-6 text-white"
      ></label>
      <div className="mt-2 flex justify-center rounded-lg border border-dashed border-white/25 hover:border-white/50 cursor-pointer transition px-4 py-6">
        <div className="text-center">
          <ArrowUpTrayIcon
            aria-hidden="true"
            className="mx-auto h-10 w-10 text-gray-500"
          />
          <div className="mt-4 flex text-sm leading-6 text-gray-400">
            <label
              htmlFor="file-upload"
              className="relative cursor-pointer rounded-md bg-gray-900 font-semibold text-white focus-within:outline-none focus-within:ring-2 focus-within:ring-sky-600 focus-within:ring-offset-2 focus-within:ring-offset-gray-900 hover:text-sky-500"
            >
              <span>Upload a CSV file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                accept=".csv"
                className="sr-only"
                onChange={handleFileChange}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-400">CSV up to 1MB</p>
        </div>
      </div>
    </div>
  )
}
