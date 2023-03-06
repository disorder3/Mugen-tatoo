var _jsxFileName = "/Users/jeremy/Documents/3WA/mugen/frontend/src/Login.jsx";
const SERVER_URL = "http://localhost:4001"; // serveur sur lequel l'application web communique

const Form = () => {
  const [tab, setTab] = React.useState("signin"); //gere l'onglet sign-in sign-up
  const [formData, setFormData] = React.useState({}); //stock les données du formulaires, initailisé comme un objet vide
  const [errors, setErrors] = React.useState(null); //stocker les erreurs renvoyées par le serveur lorsque la soumission du formulaire échoue
  const [message, setMessage] = React.useState(null); //stocker les messages renvoyés par le serveur lorsque la soumission du formulaire échoue
  const [loading, setLoading] = React.useState(false); //utilisé pour indiquer si une requête est en cours d'exécution. Il est initialisé à "false" et est géré à l'aide de "setLoading".
  const [user, useUser] = React.useState(JSON.parse(localStorage.getItem("user")) // obtenir les informations de l'utilisateur connecté
  );

  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    const fd = formData; //une copie de l'état actuel des données de formulaire, il met à jour la propriété correspondant au nom de champ avec la valeur entrée par l'utilisateur
    fd[name] = value; //objet qui va contenir les données du formulaire
    setFormData(fd); //mettre à jour l'état des données de formulaire avec les nouvelles données saisies par l'utilisateur.
  }; //La fonction "handleChange" est utilisée pour gérer les changements de l'état des champs de formulaire lorsque l'utilisateur entre des données.

  const showError = name => {
    if (!errors) return null;
    const error = errors.find(e => e.param === name);
    //methode "find" de l'objet Array pour parcourir les éléments de l'erreur (errors) et renvoie la première erreur qui correspond à la condition spécifiée dans la fonction de rappel. La fonction de rappel prend un argument "e" qui est chaque élément de "errors" et vérifie si la propriété "param" de cet élément est égale à la variable "name". Si c'est le cas, cela signifie que c'est l'erreur qui correspond au champ de formulaire qui a causé l'erreur, et il renvoie cette erreur dans la variable "error". Si aucune erreur ne correspond, "find()" renvoie "undefined".
    if (!error) return null;
    return /*#__PURE__*/React.createElement("span", {
      className: "error",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 12
      }
    }, error.msg);
  }; //La fonction "showError" est utilisée pour afficher les erreurs associées à un champ de formulaire spécifique

  const handleSubmit = async (e, URL) => {
    //La fonction "handleSubmit" est utilisée pour gérer la soumission du formulaire
    e.preventDefault();
    setLoading(true);
    //setLoading(true)" pour mettre à jour l'état de chargement de l'application
    const res = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });
    //la fonction "fetch()" pour envoyer une requête HTTP de type "POST" à l'URL spécifiée avec les données de formulaire dans le corps de la requête sous forme de chaîne JSON
    const data = await res.json();
    setLoading(false);
    //stock la réponse dans la variable "data". En général cette réponse est un objet JSON qui contient les données renvoyées par le serveur (comme un token d'authentification, des informations d'utilisateur, des messages d'erreur, etc.)

    if (res.status !== 200) {
      setErrors(data.errors);
      setMessage(data.message);
      return;
    }
    // Si le statut n'est pas égal à 200, cela signifie que la requête a échoué et il y a des erreurs à afficher. Il utilise alors la fonction "setErrors(data.errors)" pour mettre à jour l'état des erreurs avec les erreurs renvoyées par le serveur

    setErrors(null);
    setMessage(null);
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
    window.location.replace('EspaceTatoueur.html');
  };
  //Si le statut de la réponse est égal à 200, cela signifie que la requête a réussi et il n'y a pas d'erreurs à afficher
  //Il stocke ensuite le jeton d'authentification reçu dans "localStorage" sous la clé "token", et les informations d'utilisateur reçues sous la clé "user". Il utilise "JSON.stringify()" pour convertir l'objet utilisateur en chaîne JSON avant de le stocker, pour pouvoir le récupérer plus tard avec "JSON.parse()"
  //userUser pour mettre à jour l'état de l'utilisateur

  if (user) {
    return window.location.replace('EspaceTatoueur.html');
  }
  return (
    /*#__PURE__*/
    //strucutre html
    React.createElement("div", {
      className: "Logn",
      style: {
        minHeight: "50vh"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 5
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "is-flex-direction-column",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 7
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "is-flex is-justify-content-space-around mb-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }
    }, /*#__PURE__*/React.createElement("button", {
      className: "button is-danger",
      onClick: () => setTab("signin"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 11
      }
    }, "S'identifier"), /*#__PURE__*/React.createElement("button", {
      className: "button is-danger",
      onClick: () => setTab("signup"),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 11
      }
    }, "S'inscrire")), /*#__PURE__*/React.createElement("div", {
      className: "connect",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 11
      }
    }, tab === "signin" && /*#__PURE__*/React.createElement(Signin, {
      handleChange: handleChange,
      showError: showError,
      handleSubmit: handleSubmit,
      message: message,
      loading: loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 15
      }
    }), tab === "signup" && /*#__PURE__*/React.createElement(Signup, {
      handleChange: handleChange,
      showError: showError,
      handleSubmit: handleSubmit,
      message: message,
      loading: loading,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 15
      }
    })))))
  );
};
const Signin = ({
  handleChange,
  showError,
  handleSubmit,
  message,
  loading
}) => {
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => handleSubmit(e, `${SERVER_URL}/auth/signin`),
    className: "signIn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-holder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, message && /*#__PURE__*/React.createElement("article", {
    className: "message is-danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "message-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 13
    }
  }, message)), /*#__PURE__*/React.createElement("div", {
    className: "field mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    className: `input ${showError("email") !== null ? "is-danger" : ""}`,
    placeholder: "Email",
    name: "email",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 11
    }
  }), showError("email")), /*#__PURE__*/React.createElement("div", {
    className: "field mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "password",
    className: `input ${showError("password") !== null ? "is-danger" : ""}`,
    placeholder: "Mot de passe",
    name: "password",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 11
    }
  }), showError("password"))), /*#__PURE__*/React.createElement("button", {
    disabled: loading,
    type: "submit",
    className: "button is-danger is-fullwidth",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 7
    }
  }, "Envoyer"));
};
const Signup = ({
  handleChange,
  showError,
  handleSubmit,
  message,
  loading
}) => {
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: e => handleSubmit(e, `${SERVER_URL}/auth/signup`),
    className: "signUp",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "form-holder",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 7
    }
  }, message && /*#__PURE__*/React.createElement("article", {
    className: "message is-danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "message-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }, message)), /*#__PURE__*/React.createElement("div", {
    className: "field mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    className: "input",
    placeholder: "Nom",
    name: "name",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 11
    }
  }), showError("name")), /*#__PURE__*/React.createElement("div", {
    className: "field mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "email",
    className: "input",
    placeholder: "Email",
    name: "email",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 11
    }
  }), showError("email")), /*#__PURE__*/React.createElement("div", {
    className: "field mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "password",
    className: "input",
    placeholder: "Mot de passe",
    name: "password",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 11
    }
  }), showError("password")), /*#__PURE__*/React.createElement("div", {
    className: "field mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "password",
    className: "input",
    placeholder: "Confirmer mot de passe",
    name: "confirmPassword",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 11
    }
  }), showError("confirmPassword"))), /*#__PURE__*/React.createElement("button", {
    disabled: loading,
    type: "submit",
    className: "button is is-danger is-fullwidth",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
      columnNumber: 7
    }
  }, "Envoyer")) //fin structure html
  ;
};

ReactDOM.render( /*#__PURE__*/React.createElement(Form, {
  __self: this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 232,
    columnNumber: 17
  }
}), document.getElementById("login"));
