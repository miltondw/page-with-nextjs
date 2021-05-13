export default function Footer() {
  return (
    <footer className="footer">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d841.0577042094379!2d-71.15199705157842!3d8.576827689134955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6487fbec9a2357%3A0x80b1ba2ba4ee17d4!2sBJT%20Shop!5e1!3m2!1ses!2sco!4v1620933014640!5m2!1ses!2sco"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="footer__content">
        <address>
          <div className="footer__address">
            <h3 className="footer__title">Sede principal</h3>
            <p className="footer__paragraph">
              Venezuela, Estado Mérida, San Jacinto Sector el Hato, calle
              principal galpon N1
            </p>
            <h3 className="footer__title">Sucursal</h3>
            <p className="footer__paragraph">
              Venezuela, Estado Mérida, el Vigía Av. Bolívar, frente al Centro
              Cultural Mariano Picón Salas
            </p>
            <h3 className="footer__title">Nuestro horario de atención</h3>
            <p className="footer__paragraph">
              8:00 a.m A 12:00 p.m 1:00 p.m A 5:00 p.m
            </p>
          </div>
        </address>
        <p className="footer__paragraph">&copy; Creado por Industrias BJT</p>
      </div>
    </footer>
  );
}
