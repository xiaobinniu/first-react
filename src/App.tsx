import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import { Suspense } from 'react'
import loading from '@/assets/images/loading.gif'
import './App.scss'

function App() {
  const outlet = useRoutes(routes)

  return (
    <div className="App">
      <Suspense fallback={<img src={loading} style={{ margin: '300px auto', display: 'block' }} />}>
        {outlet}
      </Suspense>
    </div>
  )
}

export default App
