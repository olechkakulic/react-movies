// так как у хэдера не будет никаких состояний, то сделаем его функциональным компонентом
function Header() {
  return (
    // спизжено с сайта
    // вот сюда берем вписываем className и выбираем просто цвет!!
    <nav className="deep-purple lighten-2">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          React Movie
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="#">Repo</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export { Header };
