const EspaceTatoueur = () => {
  const [user, useUser] = React.useState(
    JSON.parse(localStorage.getItem("user")));

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };



  if (!user) {
    return window.location.replace("Login.html");
  }

  return (
    <div
      className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center"
      style={{ marginBottom: "4rem" }}
    >
      <div className="content">
        <h1 className="has-text-white">
          Bonjour {user.name} !
        </h1>
      </div>
      <button className="button is-danger" onClick={logout}>
        Deconnexion
      </button>
    </div>
  );
};

ReactDOM.render(<EspaceTatoueur />, document.getElementById("EspaceTatoueur"));

