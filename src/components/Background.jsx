import React from 'react'

const Background = () => {
  return (
      <>
          <div className='w-full h-screen fixed z-[2]'>
              <div className="absolute top-[2%] flex justify-center py-10 w-full text-zinc-600 text-xl font-mono tracking-tighter">Documents</div>
              <h1 className='absolute text-[12vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter font-mono text-zinc-900 font-bold'>Docs.</h1>
          </div>
        </>
  )
}

export default Background