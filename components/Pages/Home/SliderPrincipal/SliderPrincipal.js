import {useState} from 'react'
import sliderPrincipal from '../../../../data/slider-principal.json'
import Slider from '../../../Molecules/Slider/Slider'
export default function SliderPrincipal() {
    const [state] = useState(sliderPrincipal)
    return (
        <>
          <Slider slider={state} time={2000} />  
        </>
    )
}
