import React, { useRef, useEffect } from 'react';
import SideDock from '../media/dock.svg'
import PunPun from '../media/punpunfish.svg'
import { gsap } from 'gsap';


function Dock() {

    const fishingLine = document.getElementsByClassName('cls-4')
    console.log(fishingLine ? fishingLine : 'no fishing line')

    return(
    <div className="absolute right-0 bottom-0 w-1/4 min-w-[400px] max-w-[600px] overflow-visible">
        <div className='flex flex-col flex-auto -space-y-20'>

        <div className='z-10 -translate-x-20'>
        <img src={PunPun} alt="punpun" className=""/>
        </div>


        <img src={SideDock} alt="dock" className=""/>
        </div>
    </div>
    );
}

export default Dock;
