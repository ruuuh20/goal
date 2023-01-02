import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-4  mb-4 md:mb-6 xl:mb-8">
      
       <div class="mx-auto"><button id="main-menu" className="header_menuButton__mxzHA" style={{color: 'rgb(255, 247, 236)'}} title="Open Menu" aria-label="Open Menu"><svg viewBox="0 0 5.777777777777778 4" overflow="visible" preserveAspectRatio="none" width={26} height={18}><line x1={0} x2="5.777777777777778" y1={0} y2={0} stroke="#fff7ec" strokewidth={2} vectorEffect="non-scaling-stroke" transformorigin="2.8888888359069824px 0px" style={{transform: 'none', transformOrigin: '2.88889px 0px'}} /><line x1={0} x2="5.777777777777778" y1={2} y2={2} stroke="#fff7ec" strokewidth={2} vectorEffect="non-scaling-stroke" opacity={1} /><line x1={0} x2="5.777777777777778" y1={4} y2={4} stroke="#fff7ec" strokewidth={2} vectorEffect="non-scaling-stroke" transformorigin="2.8888888359069824px 4px" style={{transform: 'none', transformOrigin: '2.88889px 4px'}} /></svg></button></div>
   
    </header>
  )
}