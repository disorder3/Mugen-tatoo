var _jsxFileName = "/Users/jeremy/Documents/3WA/mugen/frontend/src/Images.jsx";
const SERVER_URL = "http://localhost:4001";
const Images = () => {
  const [images, setImages] = React.useState([]);
  React.useEffect(() => {
    const getAllImages = async () => {
      try {
        const {
          data
        } = await axios.get(`${SERVER_URL}/images`);
        setImages(data);
      } catch (error) {
        console.log(error);
      }
    };
    getAllImages();
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "sliderImage",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, images.map(img => /*#__PURE__*/React.createElement("img", {
    key: img._id,
    className: "imageScroll",
    src: img.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 25
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "switch",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }), /*#__PURE__*/React.createElement("div", {
    className: "imageGallerie",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, images.map(img => /*#__PURE__*/React.createElement("img", {
    key: img._id,
    className: "imageInst",
    src: img.url,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }))));
};
ReactDOM.render( /*#__PURE__*/React.createElement(Images, {
  __self: this,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 17
  }
}), document.getElementById("images"));
