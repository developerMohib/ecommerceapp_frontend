import { Show, SignInButton, SignUpButton, useAuth, UserButton } from '@clerk/react'

import PageLoad from './components/PageLoad'
import Layout from './components/Layout'

function App() {
  const { isLoaded } = useAuth()
  if (!isLoaded) return <PageLoad />
  return (
    <Layout>
      <header>
        <Show when="signed-out">
          <SignInButton mode='modal' />
          <SignUpButton mode='modal' />
        </Show>
        <Show when="signed-in">
          <UserButton />
        </Show>
      </header>
      <p className='bg-red-500'>Hello</p>
      <button className="btn btn-xl">Xlarge</button>
    </Layout>
  )
}

export default App
