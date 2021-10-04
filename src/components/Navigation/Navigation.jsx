import { NavLink } from "react-router-dom";

import s from "./Navigation.module.css";

export default function Navigation() {
  return (
    <nav>
      <NavLink to="/" exact className={s.link}>
        Главная
      </NavLink>
      <NavLink to="/authors" className={s.link}>
        Авторы
      </NavLink>
      <NavLink to="/books" className={s.link}>
        Книги
      </NavLink>
    </nav>
  );
}
