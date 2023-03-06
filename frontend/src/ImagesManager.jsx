const SERVER_URL = "http://localhost:4001"; // serveur sur lequel l'application web communique

const ImagesManager = () => {
  const [user, useUser] = React.useState(
    JSON.parse(localStorage.getItem("user")) // obtenir les informations de l'utilisateur connecté
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
        const { data } = await axios.get(`${SERVER_URL}/images`);
        setImages(data);
      } catch (error) {
        console.log(error);
      }
      setLoadingImages(false);
    };

    getAllImages();
  }, []);

  const handleChange = (event) => {
    const files = event.target.files;

    if (files.length > 5) setError("5 images maximum");

    const images = Array.from(files)
      .filter((file) => file.type.startsWith("image/"))
      .slice(0, 5);
    setSelectedImages(images);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = new FormData();

    for (let i = 0; i < selectedImages.length; i++) {
      body.append("images", selectedImages[i]);
    }

    setAdding(true);

    try {
      const { data } = await axios.post(`${SERVER_URL}/admin/addImages`, body, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setImages(data);
    } catch (err) {
      console.log(err);
    }

    setError("");
    setSelectedImages([]);
    setAdding(false);
  };

  const deleteImage = async (_id) => {
    try {
      const { data } = await axios.delete(`${SERVER_URL}/images/${_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setImages(data);
    } catch (err) {
      console.log(err);
    }
  };

  if (!user.isAdmin) return null;

  return (
    <div className="is-flex is-flex-direction-column is-justify-content-center is-align-items-center">
      

      <form onSubmit={handleSubmit} className="Preview">
        <input
          className="file"
          type="file"
          multiple
          onChange={handleChange}
          accept="image/*"
          required
        />
        <button disabled={adding} className="button is-danger" type="submit">
          {adding ? "Envoi en cours" : "Envoyer"}
        </button>
      </form>

      {error && (
        <article className="message is-danger">
          <div className="message-body">{error}</div>
        </article>
      )}

      <div className="is-flex is-flex-wrap-wrap pb-5" style={{ gap: ".5rem" }}>
        {selectedImages.map((image, index) => (
          <img
            key={index}
            src={URL.createObjectURL(image)}
            style={{ maxWidth: "15rem" }}
          />
        ))}
      </div>

      <div className="content py-5">
        <div className="is-flex is-flex-wrap-wrap is-justify-content-center" style={{ gap: ".5rem" }}>
          {loadingImages ? (
            <p>Loading images...</p>
          ) : images.length ? (
            images.map((img) => (
              <div style={{ position: "relative" }}>
                <img
                  src={img.url}
                  style={{
                    width: "10rem",
                    height: "10rem",
                    objectFit: "cover",
                  }}
                />
                <button
                  onClick={() => deleteImage(img._id)}
                  className="button is-danger is-small"
                  style={{
                    position: "absolute",
                    top: "0.15rem",
                    right: "0.15rem",
                  }}
                >
                  X
                </button>
              </div>
            ))
          ) : (
            <small className="has-text-white">
              il n'y a pas d'images dans la base de données
            </small>
          )}
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<ImagesManager />, document.getElementById("ImagesManager"));
