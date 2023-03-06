var _jsxFileName = "/Users/jeremy/Documents/3WA/mugen/frontend/src/EspaceTatoueur.jsx";
const EspaceTatoueur = () => {
  const [user, useUser] = React.useState(JSON.parse(localStorage.getItem("user")) // obtenir les informations de l'utilisateur connecté
  );

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.reload();
  };

  if (!user) {
    return window.location.replace("Login.html");
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "is-flex is-flex-direction-column is-justify-content-center is-align-items-center",
    style: {
      marginBottom: "4rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "has-text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, "Bonjour ", user.name, " !")), /*#__PURE__*/React.createElement("button", {
    className: "button is-danger",
    onClick: logout,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, "Deconnexion"));
};
ReactDOM.render( /*#__PURE__*/React.createElement(EspaceTatoueur, {
  __self: this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 17
  }
}), document.getElementById("EspaceTatoueur"));
