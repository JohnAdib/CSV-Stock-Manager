import CodeMirror from '@uiw/react-codemirror'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { json } from '@codemirror/lang-json'

interface IBrowserFrame {
  children: React.ReactNode
}

// https://codepen.io/ScottWindon/pen/XWdbPLm
export function BrowserFrame({ children }: IBrowserFrame) {
  return (
    <>
      <div className="py-12 flex items-center justify-center">
        <div className="rounded-lg overflow-hidden shadow-xl bg-gray-900 text-white min-w-64 md:max-w-screen-md md:w-full min-h-48">
          <div className="border-b border-gray-800 px-8 py-3">
            <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
            <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
            <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
          </div>
          <div className="text-base">
            <CodeMirror
              value={children?.toString()}
              height="200px"
              theme={dracula}
              readOnly={true}
              extensions={[json()]}
            />
          </div>
        </div>
      </div>
    </>
  )
}
