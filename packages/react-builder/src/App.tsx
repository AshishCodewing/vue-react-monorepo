import { useEffect } from 'react'
import './App.css'

function App({ onChange }: { onChange?: (data: any) => void }) {
  useEffect(() => {
    onChange?.({ count: 0 })
  }, [onChange])

  return (
    <>
      <div>
        <h1>React Builder</h1>
      </div>
    </>
  )
}

export default App
