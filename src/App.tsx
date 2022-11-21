import style from './App.module.scss'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'
import { Suspense } from 'react'

function App() {
  const outlet = useRoutes(routes)

  return (
    <div className="App" >
      <Suspense fallback={<h4>loading...</h4>}>
        {outlet}
      </Suspense>
    </div>
  )
}

export default App
