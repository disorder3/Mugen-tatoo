import EspaceTatoueur from "./dist/EspaceTatoueur";
import Images from "./dist/Images";
import ImagesManager from "./dist/ImagesManager";
import Form from "./dist/login";
import Reservation from "./dist/Reservation";

const App = () => (
    <>
      <EspaceTatoueur />
      <Images />
      <ImagesManager />
      <Form />
      <Reservation />
      </>
  );

ReactDOM.render(<App />, document.getElementById("EspaceTatoueur"));
ReactDOM.render(<App />, document.getElementById("images"));
ReactDOM.render(<App />, document.getElementById("ImagesManager"));
ReactDOM.render(<App />, document.getElementById("login"));
ReactDOM.render(<App />, document.getElementById("reservation"));