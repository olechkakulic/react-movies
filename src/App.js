// подключим наш хэдер к приложению
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { Main } from "./layout/Main";
function App() {
  return (
    // для того, чтобы убрать классический div, так как он нам не нужен, но мы хотим вставить несколько
    // элементов сразу. используем такую штучку


    <>
    {/* передадим наш компонент */}
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
}

export default App;
