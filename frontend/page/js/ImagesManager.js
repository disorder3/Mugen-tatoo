var _jsxFileName = "/Users/jeremy/Documents/3WA/mugen/frontend/src/ImagesManager.jsx";
const SERVER_URL = "http://localhost:4001"; // serveur sur lequel l'application web communique

const ImagesManager = () => {
  const [user, useUser] = React.useState(JSON.parse(localStorage.getItem("user")) // obtenir les informations de l'utilisateur connecté
  );

  const [images, setImages] = React.useState([]);
  const [selectedImages, setSelectedImages] = React.useState([]);
  const [error, setError] = React.useState("");
  const [adding, setAdding] = React.useState(false);
  const [loadingImages, setLoadingImages] = React.useState(false);
  React.useEffect(() => {
    const getAllImages = async () => {
      setLoadingImages(true);
      try {
        const {
          data
        } = await axios.get(`${SERVER_URL}/images`);
        setImages(data);
      } catch (error) {
        console.log(error);
      }
      setLoadingImages(false);
    };
    getAllImages();
  }, []);
  const handleChange = event => {
    const files = event.target.files;
    if (files.length > 5) setError("5 images maximum");
    const images = Array.from(files).filter(file => file.type.startsWith("image/")).slice(0, 5);
    setSelectedImages(images);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    const body = new FormData();
    for (let i = 0; i < selectedImages.length; i++) {
      body.append("images", selectedImages[i]);
    }
    setAdding(true);
    try {
      const {
        data
      } = await axios.post(`${SERVER_URL}/admin/addImages`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setImages(data);
    } catch (err) {
      console.log(err);
    }
    setError("");
    setSelectedImages([]);
    setAdding(false);
  };
  const deleteImage = async _id => {
    try {
      const {
        data
      } = await axios.delete(`${SERVER_URL}/images/${_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
      setImages(data);
    } catch (err) {
      console.log(err);
    }
  };
  if (!user.isAdmin) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "is-flex is-flex-direction-column is-justify-content-center is-align-items-center",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 5
    }
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit,
    className: "Preview",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement("input", {
    className: "file",
    type: "file",
    multiple: true,
    onChange: handleChange,
    accept: "image/*",
    required: true,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 9
    }
  }), /*#__PURE__*/React.createElement("button", {
    disabled: adding,
    className: "button is-danger",
    type: "submit",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 9
    }
  }, adding ? "Envoi en cours" : "Envoyer")), error && /*#__PURE__*/React.createElement("article", {
    className: "message is-danger",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "message-body",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 11
    }
  }, error)), /*#__PURE__*/React.createElement("div", {
    className: "is-flex is-flex-wrap-wrap pb-5",
    style: {
      gap: ".5rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, selectedImages.map((image, index) => /*#__PURE__*/React.createElement("img", {
    key: index,
    src: URL.createObjectURL(image),
    style: {
      maxWidth: "15rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 11
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "content py-5",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "is-flex is-flex-wrap-wrap is-justify-content-center",
    style: {
      gap: ".5rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, loadingImages ? /*#__PURE__*/React.createElement("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "Loading images...") : images.length ? images.map(img => /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 15
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: img.url,
    style: {
      width: "10rem",
      height: "10rem",
      objectFit: "cover"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => deleteImage(img._id),
    className: "button is-danger is-small",
    style: {
      position: "absolute",
      top: "0.15rem",
      right: "0.15rem"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 17
    }
  }, "X"))) : /*#__PURE__*/React.createElement("small", {
    className: "has-text-white",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, "il n'y a pas d'images dans la base de donn\xE9es"))));
};
ReactDOM.render( /*#__PURE__*/React.createElement(ImagesManager, {
  __self: this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154,
    columnNumber: 17
  }
}), document.getElementById("ImagesManager"));
