var _jsxFileName = "/Users/jeremy/Documents/3WA/mugen/frontend/src/Reservation.jsx";
const SERVER_URL = "http://localhost:4001"; //serveur sur lequel l'application web communique

const Reservation = () => {
  const imageFiles = React.useRef(null); //créer une référence à l'élément de formulaire de type "file" qui permet à l'utilisateur de sélectionner des images. La référence "imageFiles" est initialisée à "null" car elle ne contient pas encore de valeur. Cela permet de stocker une référence à l'élément de formulaire de sorte que vous puissiez y accéder plus tard pour manipuler les fichiers sélectionnés, tels que les envoyer au serveur.
  const formRef = React.useRef(null); // permet de stocker une référence à l'élément de formulaire de sorte que vous puissiez y accéder plus tard pour manipuler le formulaire, tels que soumettre les données ou vérifier les erreurs.

  const [formData, setFormData] = React.useState({
    firstname: "",
    lastname: "",
    birthday: "",
    email: "",
    message: ""
  }); // stocker les valeurs saisies par l'utilisateur dans ces champs de formulaire, et de les utiliser pour soumettre les données ou vérifier les erreurs. La fonction "setFormData" est utilisée pour mettre à jour les données du formulaire dans l'état lorsque les champs du formulaire sont modifiés.
  const [errors, setErrors] = React.useState(null); //stocker les erreurs renvoyées par le serveur lorsque la soumission du formulaire échoue
  const [loading, setLoading] = React.useState(false); //utilisé pour indiquer si une requête est en cours d'exécution. Il est initialisé à "false" et est géré à l'aide de "setLoading".
  const [reserved, setReserved] = React.useState(false); // créer un état pour stocker l'information de réservation. Il initialise cet état à false, ce qui indique que l'utilisateur n'a pas encore réservé un tatouage. La fonction "setReserved" est utilisée pour mettre à jour la valeur de l'état "reserved" lorsque l'utilisateur réserve un tatouage avec succès

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
    if (!error) return null;
    return /*#__PURE__*/React.createElement("span", {
      className: "error",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 12
      }
    }, error.msg);
  }; //Cette fonction "showError" prend en entrée le nom d'un champ de formulaire et vérifie s'il existe des erreurs pour ce champ
  //Il commence par vérifier s'il y a des erreurs en utilisant "if (!errors) return null;", qui signifie que s'il n'y a pas d'erreur, il ne fait rien et retourne "null". S'il y a des erreurs, la fonction utilise la méthode "find()" pour rechercher l'erreur associée au nom de champ donné. Si l'erreur existe, elle est retournée sous forme de message d'erreur. Cette fonction permet d'afficher des messages d'erreur spécifiques à chaque champ de formulaire lorsque des erreurs sont détectées lors de la validation du formulaire.

  const handleSubmit = async e => {
    //définit une fonction asynchrone qui prend en paramètre un événement "e" (généralement l'événement de soumission de formulaire). Cette fonction sera appelée lorsque l'utilisateur soumet le formulaire
    e.preventDefault(); //est utilisée pour annuler l'événement de soumission de formulaire par défaut. En appelant "preventDefault()" sur l'événement de soumission, cela empêche le navigateur de recharger la page ou de suivre le lien d'action du formulaire

    const body = new FormData(); // crée un nouveau objet FormData

    Object.keys(formData).forEach(key => body.append(key, formData[key])); //utilise la méthode forEach() pour parcourir les clés de l'objet formData et ajouter chaque champ de formulaire au corps de la requête FormData. Il utilise la méthode .append() de l'objet FormData pour ajouter chaque champ de formulaire. La méthode .append() prend en compte deux paramètres: le nom du champ et sa valeur. Cela permet de regrouper les données de formulaire dans un seul objet pour faciliter leur transmission au serveur.

    body.append("image", imageFiles.current.files[0]); //utilise la méthode .append() de l'objet FormData pour ajouter le fichier image à l'objet FormData. Il utilise "image" comme nom de champ pour le fichier image, ce qui indique au serveur qu'il s'agit d'une image, et il utilise la référence à l'objet imageFiles pour accéder au fichier sélectionné. Il utilise l'index [0] pour sélectionner le premier fichier de la liste des fichiers sélectionnés, car il ne prend en compte qu'un seul fichier à la fois. Cela permet d'ajouter le fichier image aux données de formulaire pour qu'il puisse être envoyé au serveur en même temps que les autres données de formulaire.

    setLoading(true); //modifie l'état "loading" pour indiquer que la demande est en cours d'exécution. Il est utilisé pour afficher un indicateur de chargement à l'utilisateur pour informer qu'une requête HTTP est en cours d'exécution et qu'il faut attendre la réponse du serveur.

    try {
      const res = await axios.post(`${SERVER_URL}/reservation`, body); // utilise la méthode "post" d'Axios pour envoyer les données de formulaire au serveur. Il utilise une URL dynamique qui est générée à partir de la variable d'environnement SERVER_URL et de l'URL de la route de réservation. Il passe l'objet FormData en tant que corps de la requête.
      if (res.data) {
        formRef.current.reset();
        setReserved(true);
        setErrors(null); //Si la requête est réussie, il utilise la référence à l'élément de formulaire pour réinitialiser le formulaire, met à jour l'état "reserved" pour indiquer que la réservation a été effectuée avec succès et met à jour l'état "errors" pour indiquer qu'il n'y a pas d'erreurs.
      }
    } catch (err) {
      setErrors(err.response.data.errors); //Si la requête échoue, il utilise l'objet d'erreur pour récupérer les erreurs de réponse et les stocke dans l'état "errors" pour les afficher ultérieurement.
    }

    setLoading(false); //met à jour l'état "loading" pour indiquer que la demande est terminée.
  };

  return /*#__PURE__*/React.createElement("form", {
    ref: formRef,
    onSubmit: handleSubmit,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, reserved && /*#__PURE__*/React.createElement("article", {
    className: "message is-success",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "message-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }, "vous avez r\xE9serv\xE9 avec succ\xE8s")), /*#__PURE__*/React.createElement("div", {
    className: "field mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "lastname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 9
    }
  }, "Nom"), /*#__PURE__*/React.createElement("input", {
    className: `input ${showError("lastname") !== null ? "is-danger" : ""}`,
    id: "lastname",
    type: "text",
    placeholder: "Nom",
    name: "lastname",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }), showError("lastname")), /*#__PURE__*/React.createElement("div", {
    className: "field mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "firstname",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }, "Pr\xE9nom"), /*#__PURE__*/React.createElement("input", {
    className: `input ${showError("firstname") !== null ? "is-danger" : ""}`,
    id: "firstname",
    type: "text",
    placeholder: "Pr\xE9nom",
    name: "firstname",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 9
    }
  }), showError("firstname")), /*#__PURE__*/React.createElement("div", {
    className: "field mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "birthday",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 9
    }
  }, "Date de naissance :"), /*#__PURE__*/React.createElement("input", {
    className: `input ${showError("birthday") !== null ? "is-danger" : ""}`,
    id: "birthday",
    type: "date",
    name: "birthday",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 9
    }
  }), showError("birthday")), /*#__PURE__*/React.createElement("div", {
    className: "field mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "email",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 9
    }
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    className: `input ${showError("email") !== null ? "is-danger" : ""}`,
    id: "email",
    type: "email",
    placeholder: "Email",
    name: "email",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }), showError("email")), /*#__PURE__*/React.createElement("div", {
    className: "field mb-2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "file",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, "Piece-jointe"), /*#__PURE__*/React.createElement("input", {
    ref: imageFiles,
    className: `input ${showError("image") !== null ? "is-danger" : ""}`,
    id: "file",
    type: "file",
    name: "images",
    accept: "image/png, image/jpg, image/jpeg, image/gif",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 9
    }
  }), showError("image")), /*#__PURE__*/React.createElement("div", {
    className: "field mb-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement("label", {
    htmlFor: "message",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 9
    }
  }, "Message"), /*#__PURE__*/React.createElement("textarea", {
    className: `textarea ${showError("message") !== null ? "is-danger" : ""}`,
    id: "message",
    name: "message",
    onChange: handleChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }), showError("message")), /*#__PURE__*/React.createElement("div", {
    className: "Logn",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement("button", {
    disabled: loading,
    className: "button is-danger",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 9
    }
  }, loading ? "Envoi en cours" : "Envoyer"), /*#__PURE__*/React.createElement("button", {
    disabled: loading,
    className: "button is-danger",
    type: "reset",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 9
    }
  }, "Effacer")), /*#__PURE__*/React.createElement("div", {
    className: "field.res has-text-centered",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 9
    }
  }, "Ou envoyez moi simplement un e-mail sur"), /*#__PURE__*/React.createElement("a", {
    className: "mail",
    href: "mailto:mugen.tattoo.contact@gmail.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 9
    }
  }, "mugen.tattoo.contact@gmail.com"))) //fin structure html
  ;
};

ReactDOM.render( /*#__PURE__*/React.createElement(Reservation, {
  __self: this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 171,
    columnNumber: 17
  }
}), document.getElementById("reservation")); // permet de placer le composant dans la page web à l'endroit où l'élément avec cet ID se trouve
