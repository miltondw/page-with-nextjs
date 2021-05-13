import SliderPrincipal from "./SliderPrincipal/SliderPrincipal";
import SliderBlog from "./SliderBlog/SliderBlog";
import Services from "./Services/Services";
import Catalogo from "./Catalogo/Catalogo";
export default function Home() {
  return (
    <>
      <SliderPrincipal />
      <SliderBlog />
      <Services />
      <Catalogo />
    </>
  );
}
