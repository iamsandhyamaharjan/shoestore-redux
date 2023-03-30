import React from 'react'
import { Cart, FlexContent, Footer, Hero ,Navbar,Sales, Stories } from './components'
import { heroapi ,popularsales ,topratesales,story,highlight, sneaker, footerAPI } from './data/data'
const App = () => {
  return (
    <>
    <Navbar/>
    <Cart/>
    <main className='flex flex-col gap-16 relative'>
      <Hero heroapi={heroapi}/>
      <Sales endpoint={popularsales} ifExists/>
      <FlexContent endpoint={highlight} ifExists/>
      <Sales endpoint={topratesales}/>
      <FlexContent endpoint={sneaker}/>
      <Stories story={story}/>
    </main>
    <Footer footerAPI={footerAPI}/>
    </>
  )
}

export default App