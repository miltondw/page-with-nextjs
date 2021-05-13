import { useState } from "react";
//Data
import services from "../../../../data/services.json";
//Components
import Title from "../../../Atoms/Title/Title";
export default function Services() {
  const [state] = useState({
    services,
  });
  return (
    <div className="services">
      <Title title="Servicios" />
      <ul className="services-content" l>
        {state.services.map((service) => (
          <li className="services__item" key={service.id}>
            <picture className="services__icon">
              <img
                className="services__icon"
                src={service.img[0].src}
                alt={service.img[0].alt}
              />
            </picture>
            <h3 className="services__title">{service.title}</h3>
            <p className="services__paragraph">{service.paragraph}</p>
            <picture className="services__img">
              <img
                className="services__img"
                src={service.img[1].src}
                alt={service.img[1].alt}
              />
            </picture>
          </li>
        ))}
      </ul>
    </div>
  );
}
