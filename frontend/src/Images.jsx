const SERVER_URL = "http://localhost:4001";

const Images = () => {
    const [images, setImages] = React.useState([])

    React.useEffect(() => {
        const getAllImages = async () => {
            try {
                const { data } = await axios.get(`${SERVER_URL}/images`)
                setImages(data)
            } catch (error) {
                console.log(error)
            }
        }

        getAllImages()
    }, [])

    return (
        <div>
            <div className="sliderImage">
                {
                    images.map(img => (
                        <img key={img._id} className="imageScroll" src={img.url} />
                    ))
                }
            </div>
        </div>
    )
}


ReactDOM.render(<Images />, document.getElementById("images"));