import EspaceTatoueur from "./EspaceTatoueur";
import Images from "./Images";
import ImagesManager from "./ImagesManager";
import Form from "./Login";
import Reservation from "./Reservation";
import Faq from "./Faq"

const App = () => (
    <>
      <EspaceTatoueur />
      <Images />
      <ImagesManager />
      <Form />
      <Reservation />
      <Faq/>
      </>
  );

ReactDOM.render(<App />, document.getElementById("EspaceTatoueur"));
ReactDOM.render(<App />, document.getElementById("images"));
ReactDOM.render(<App />, document.getElementById("ImagesManager"));
ReactDOM.render(<App />, document.getElementById("login"));
ReactDOM.render(<App />, document.getElementById("reservation"));
ReactDOM.render(<App />, document.getElementById("Faq"));