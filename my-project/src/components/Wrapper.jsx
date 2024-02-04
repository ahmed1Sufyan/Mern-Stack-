import React from 'react'

export const Wrapper = (props) => {
    const { children, className="w-[65%]" } = props;
  return (
    <div className={className}>
        {children}
    </div>
  )
}
