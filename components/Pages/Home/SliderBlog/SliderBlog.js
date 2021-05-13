import { useState } from "react";
//Components
import Slider from "../../../Molecules/Slider/Slider";
// import Title from "../../../Atoms/Title";
//Data
import sliderBLog from "../../../../data/blogSlider.json";

export default function SliderBlog() {
  const [state] = useState(sliderBLog);
  return (
    <>
      {/* <Title title={"Articulos principales del blog"} /> */}
      <Slider slider={state} time={3000} />
    </>
  );
}
