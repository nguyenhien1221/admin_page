import React from 'react';

const ScrollTop = () => {

    const handleScroll = () => {
        window.scrollTo(0,0)
    }
  return (
    <div onClick={() => handleScroll()} className='scroll_wrapper'>&Lambda;</div>
  )
}

export default ScrollTop