export default function Footer() {
  return (
    <footer className="footer">
      <div className="map"></div>
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
            <p className="footer__paragraph">8:00 a.m A 12:00 p.m 1:00 p.m A 5:00 p.m</p>
          </div>
        </address>
        <p className="footer__paragraph">&copy; Creado por Industrias BJT</p>
      </div>
    </footer>
  );
}
