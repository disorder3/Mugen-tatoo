import EspaceTatoueur from "../page/js/EspaceTatoueur";
import Images from "../page/js/Images";
import ImagesManager from "../page/js/ImagesManager";
import Form from "../page/js/Login";
import Reservation from "../page/js/Reservation";

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