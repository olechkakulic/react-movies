function Footer(){
    return (
        <footer className="page-footer deep-purple lighten-2">
        <div className="footer-copyright">
          <div className="container">
            {/* можно использовать jsx чтобы получить год текущий */}
          {new Date().getFullYear()} Copyright Text
          <a className="grey-text text-lighten-4 right" href="#!">Repo</a>
          </div>
        </div>
      </footer>
    )
}
export {Footer}