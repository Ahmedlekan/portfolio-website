import React, {ReactNode} from 'react'
import { twMerge } from 'tailwind-merge'

interface OrbitProps {
  children?: ReactNode;
  size: number
  rotation: number
  orbitDuration?: string
  shouldOrbit?: boolean
  spinDuration?: string
  shouldSpin?: boolean
}

const Orbit = ({children, size, rotation, orbitDuration, 
    shouldOrbit=false, spinDuration, shouldSpin }: OrbitProps) => {
  
      return (
    <div className="absolute left-1/2 top-1/2 
        -translate-x-1/2 -translate-y-1/2"
      >
        <div className={twMerge(shouldOrbit === true && 'animate-spin')} 
          style={{animationDuration: orbitDuration}}
        >  
          <div className=" flex items-start justify-start"
            style={{ 
              height:`${size}px`, 
              width:`${size}px`, 
              transform: `rotate(${rotation}deg)`,
              
            }}
          >
            <div className={twMerge(shouldSpin === true && "animate-spin")}
              style={{animationDuration: spinDuration}}
            >
              <div className="inline-flex animate-spin [animation-duration:10s]"
                style={{transform: `rotate(${rotation * -1})`}}
              >  
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Orbit