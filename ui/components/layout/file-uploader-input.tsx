import { ArrowUpTrayIcon } from '@heroicons/react/24/solid'

interface FileUploaderInputProps {
  onFileSelect: (file: File) => void
}

export function FileUploaderInput({ onFileSelect }: FileUploaderInputProps) {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] || null

    if (!selectedFile) {
      return
    }

    onFileSelect(selectedFile)
  }

  return (
    <div className="col-span-full select-none px-4 md:px-8">
      <label
        htmlFor="file-upload"
        className="mt-2 flex justify-center rounded-lg border border-dashed border-black/25 dark:border-white/25 hover:border-black/50 dark:hover:border-white/50 cursor-pointer transition px-4 py-6"
      >
        <div className="text-center">
          <ArrowUpTrayIcon
            aria-hidden="true"
            className="mx-auto h-10 w-10 text-gray-500"
          />
          <div className="mt-4 flex text-sm leading-6 text-gray-600 dark:text-gray-400">
            <div className="relative cursor-pointer rounded-md font-semibold text-black dark:text-white focus-within:outline-none hover:text-sky-500 transition">
              <span>Upload a CSV file</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                accept=".csv"
                className="sr-only"
                onChange={handleFileChange}
              />
            </div>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs leading-5 text-gray-600 dark:text-gray-400">
            CSV up to 1MB
          </p>
        </div>
      </label>
    </div>
  )
}
