import { useState } from 'react'
import viteLogo from '/vite.svg'
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/Router'
import Layout from './layout/Layout'

function App() {

  return <>
    <BrowserRouter>
      <Layout>
        <Router/>
      </Layout>
    </BrowserRouter>
  </>
}

export default App
