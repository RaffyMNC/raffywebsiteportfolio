import { useEffect, useRef } from 'react'
import RaffyLogo from '../../../assets/images/RaffyLogo.svg'
import './index.scss'



const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  const didAnimate = useRef(false)
  useEffect(() => {
    if (didAnimate.current) return
    didAnimate.current = true
    })

  return (
    
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={RaffyLogo}
        alt="JavaScript,  Developer"
      />


    </div>
  )
}



export default Logo