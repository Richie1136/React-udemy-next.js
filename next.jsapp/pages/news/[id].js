import React from 'react'
import { useRouter } from 'next/router'

const Newsdetail = () => {

  const router = useRouter()

  const route = router.query.id;

  return (
    <div>
      <h1>{route}</h1>
    </div>
  )
}

export default Newsdetail
