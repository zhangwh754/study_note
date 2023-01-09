import React, { memo } from 'react'

const Home = memo(({ count }) => {
  console.log('Home_Function render')

  return (
    <>
      <h2>函数组件，使用memo：{count}</h2>
    </>
  )
})

export default Home
