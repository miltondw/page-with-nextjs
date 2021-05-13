import Title from "../../../Atoms/Title/Title";
import CardCatalogo from "../../../Atoms/CardCatalogo/CardCatalogo";
export default function Catalogo() {
  return (
    <div className="catalogo">
      <Title title="Catalogo" />
      <ul className="catalogo__items">
        <li className="catalogo__item">
          <picture className="catalogo__img">
            <h3>Bombas de vacio</h3>
            {/* <img src="" alt="" className="catalogo__img" /> */}
          </picture>
        </li>
        <li className="catalogo__item">
          <picture className="catalogo__img">
            <h3>Tienda</h3>
            {/* <img src="" alt="" className="catalogo__img" /> */}
          </picture>
        </li>
        <li className="catalogo__item">
          <h3>Mercado Libre</h3>
          <picture className="catalogo__img">
            {/* <img src="" alt="" className="catalogo__img" /> */}
          </picture>
        </li>
      </ul>
      <div className="catalogo__cards">
        <CardCatalogo
          title={"Bombas de vacio bjt"}
          image={"/images/catalogo/catalogo-bombas-M.png"}
          alt={"Catalogo bombas de vacio bjt"}
          href={"https://www.industriasbjt.com/catalogo/bombas-de-vacio.pdf"}
          download={"Catalogo-bombas-de-vacio-BJT"}
        />
        <CardCatalogo
          title={"Componentes y accesorio"}
          image={"/images/catalogo/catalogo-productos.gif"}
          alt={"Catalogo bombas de vacio bjt"}
          href={"https://www.industriasbjt.com/catalogo/bombas-de-vacio.pdf"}
          download={"Catalogo-bombas-de-vacio-BJT"}
        />
      </div>
    </div>
  );
}
