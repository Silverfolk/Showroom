import React from 'react'
import {RouterProvider , createBrowserRouter} from 'react-router-dom';
import Landing from './Landing';
const Main = () => {
  const approuter=createBrowserRouter([
    {
      path:'/',
      element:<Landing/>
  }
  ])
  return (
    <div>
      <RouterProvider router={approuter}/>
    </div>
  )
}

export default Main
