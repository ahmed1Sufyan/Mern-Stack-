import React from 'react'
import { Outlet } from 'react-router-dom'

export const Layout = ({}) => {
  return (
    <header className="p-4">
    <main className=" justify-center h-full bg-gray-50 mx-auto gap-3 flex w-[80%]">
        <Outlet />
    </main>
  </header>
  )
}
