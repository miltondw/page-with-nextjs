import { useState } from "react";
import Items from "./Items.json";
import Link from "next/link";
import Tienda from "./Tienda.json";
import contacts from "./contacts.json";
import Images from "next/image";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  const [state, setState] = useState({
    Items,
    Urltienda: "https://tienda.industriasbjt.com/shop/",
    Tienda,
    contacts,
    menu: false,
    arrowTienda: false,
    arrowSubTienda: false,
  });
  const menu = (e) => {
    if (
      e.target.id == "toggle-menu" ||
      e.target.parentElement.id == "toggle-menu"
    ) {
      setState({
        ...state,
        menu: !state.menu,
      });
    }
  };
  const arrow = (e) => {
    setState({
      ...state,
      [e.target.id]: !state[e.target.id],
    });
  };
  return (
    <>
      <header className="header">
        <div className="header__right">
          <picture>
            <Images
              src="/images/IndustriasBJT_Logotipo.png"
              alt="Logo BJT"
              width={70}
              height={70}
              loading="lazy"
              className="logo"
            />
          </picture>
          <ul className="contact-content">
            {state.contacts.map((c) => {
              return (
                <li className="contact-content__item" key={c.link}>
                  {c.type === "wsp" ? <i className="fab fa-whatsapp"></i> : ""}
                  {c.type === "mail" ? <i className="far fa-envelope"></i> : ""}
                  {c.type === "social" ? (
                    <div className="icons__social">
                      <a href="">
                        <i className="fab fa-facebook"></i>
                      </a>
                      <a href="">
                        <i className="fab fa-instagram"></i>
                      </a>
                      <a href="">
                        <i className="fab fa-linkedin-in"></i>
                      </a>
                    </div>
                  ) : (
                    ""
                  )}

                  <a className="contact-content__link" href={c.link}>
                    {c.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </header>
      <div className="menu">
        <div className="topbar" id="topbar">
          <div className="toggle-menu">
            <div
              onClick={menu.bind(this)}
              className={`toggle-menu__icon ${state.menu ? "show" : ""}`}
              id="toggle-menu"
            >
              <div className="first-bar"></div>
              <div className="second-bar"></div>
              <div className="third-bar"></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`header__left ${state.menu ? "menushow" : ""}`}>
        <nav className="navbar-content">
          <ul className="navbar-content__content">
            {state.Items.map((item) => {
              return item.name !== "Tienda" ? (
                <li className="navbar-content__item" key={item.link}>
                  <Link href={item.link}>
                    <a
                      className={`${
                        router.pathname == item.link ? "link_active" : " "
                      }  navbar-content__link`}
                    >
                      {item.name}
                    </a>
                  </Link>
                </li>
              ) : (
                <li className="navbar-content__item" key={item.link}>
                  <div className="row">
                    <a className="navbar-content__link" href={state.Urltienda}>
                      {item.name}
                    </a>
                    <i
                      onClick={arrow.bind(this)}
                      id="arrowTienda"
                      className={`fas fa-angle-up ${
                        state.arrowTienda ? "rotate" : ""
                      } `}
                    ></i>
                  </div>
                  <ul
                    className={`subnavbar-content ${
                      state.arrowTienda ? "submenu" : ""
                    } `}
                  >
                    {state.Tienda.map((shop) => {
                      return (
                        <li
                          className={`subnavbar-content__item ${
                            shop.name === "Componentes y Accesorios"
                              ? state.arrowTienda
                                ? "gridspan"
                                : ""
                              : ""
                          }`}
                          key={shop.link}
                        >
                          <div className="row">
                            <a
                              className="subnavbar-content__link"
                              href={`${state.Urltienda}${shop.link}`}
                            >
                              {shop.name}
                            </a>
                            {shop.name === "Componentes y Accesorios" ? (
                              <i
                                onClick={arrow.bind(this)}
                                id="arrowSubTienda"
                                className={`fas fa-angle-up ${
                                  state.arrowSubTienda ? "rotate" : ""
                                } `}
                              ></i>
                            ) : (
                              ""
                            )}
                          </div>
                          <ul
                            className={`subnavbar-sub ${
                              state.arrowSubTienda ? "submenu" : ""
                            }`}
                          >
                            {shop.subitems
                              ? shop.subitems.map((subitem) => {
                                  return (
                                    <li
                                      className="subnavbar-sub__item"
                                      key={subitem.link}
                                    >
                                      <a
                                        className="subnavbar-sub__link"
                                        href={`${state.Urltienda}${subitem.link}`}
                                      >
                                        {subitem.name}
                                      </a>
                                    </li>
                                  );
                                })
                              : ""}
                          </ul>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}
