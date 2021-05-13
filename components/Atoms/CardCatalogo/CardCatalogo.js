import React from "react";

export default function CardCatalogo(props) {
  return (
    <div className="Card-catalogo">
      <div className="Card-catalogo__body">
          <h2 className="Card-catalogo__title">{props.title}</h2>
        <picture className="Card-catalogo__images">
          <img src={props.image} alt={props.alt} className="Card-catalogo__images" />
        </picture>
        <button className="Card-catalogo__btn">
            <a className="Card-catalogo__link" href={props.href} download={props.download}>
                Descargar
            </a>
        </button>
      </div>
    </div>
  );
}
