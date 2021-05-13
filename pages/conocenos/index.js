import Layaut from "../../components/Template/Layaut";

export default function blog() {
  return (
    <Layaut>
      <div className="about">
        <h1 className="about__title">
          Dossier Empresarial{" "}
          <span className="about__title--title">
            Soluciones para el Ordeño Mecánico.
          </span>
        </h1>
        <div className="about-grid">
          <article className="about-article">
            <header className="article-header">
              <picture className="article-header__picture">
                <img
                  className="article-header__images"
                  src="/images/conocenos/ordeno-portatil.gif"
                  alt="Ordeno Portatil"
                />
              </picture>
              <h2 className="article-header__title">¿quienes somos?</h2>
            </header>
            <section className="article-section">
              <p className="article-section__paragraph">
                <strong>INDUSTRIAS BJT</strong>C.A es una empresa venezolana,
                que inicia sus actividades en el año 2.007, con la presentación
                de un prototipo de ordeño mecánico portátil, totalmente diseñado
                y fabricado en nuestra planta, el cual resultó ser absolutamente
                funcional y exitoso, convirtiéndonos así en la primera empresa
                venezolana en fabricar equipos de ordeño.
              </p>
              <p className="article-section__paragraph">
                Luego de doce años de experiencia y con la inquietud de
                expandirnos, nace Industrias BJT Compañía Anónima. Comprometida
                con muestra misión fundadora, esta empresa está dedicada a
                diseñar y fabricar sistemas de ordeños fijos y portátiles,
                bombas de vacío, bombas de leche y otros equipos e implementos
                agrícolas.
              </p>
              <p className="article-section__paragraph">
                Ampliamos las actividades empresariales, ofreciendo un excelente
                servicio técnico profesional en mantenimiento
              </p>
            </section>
          </article>

          <article className="about-article">
            <header className="article-header">
              <h3 className="article-section__subtitle">
                altos estandares de calidad y tecnología de punta
              </h3>
            </header>
            <section className="article-section">
              <p className="article-section__paragraph">
                Garantizamos altos estándares de calidad, ya que empleamos
                tecnología de punta en todas las etapas del diseño y fabricación
                de los sistemas de ordeño.
              </p>
              <p className="article-section__paragraph">
                reUtilizamos técnicas tan complejas como el modelado 3D por
                medio del diseño asistido por computadoras (C.A.D), simulaciones
                3D (c.a.e), asi como también manufactura asistida (c.a.m) por
                medio de maquinaria C.N.C.
              </p>
            </section>
            <picture className="article-section__picture">
              <img
                className="article-section__images"
                src="/images/conocenos/nelson-bjt.png"
                alt="nelson ingeniero BJT"
              />
            </picture>
          </article>

          <article className="about-article">
            <header className="article-header">
              <h3 className="article-section__subtitle">
                altos estandares de calidad y tecnología de punta
              </h3>
            </header>
            <section className="article-section">
              <p className="article-section__paragraph">
                Garantizamos altos estándares de calidad, ya que empleamos
                tecnología de punta en todas las etapas del diseño y fabricación
                de los sistemas de ordeño.
              </p>
              <p className="article-section__paragraph">
                reUtilizamos técnicas tan complejas como el modelado 3D por
                medio del diseño asistido por computadoras (C.A.D), simulaciones
                3D (c.a.e), asi como también manufactura asistida (c.a.m) por
                medio de maquinaria C.N.C.
              </p>
            </section>
            <picture className="article-section__picture">
              <img
                className="article-section__images"
                src="/images/conocenos/nelson-bjt.png"
                alt="nelson ingeniero BJT"
              />
            </picture>
          </article>
        
        </div>
      </div>
    </Layaut>
  );
}
