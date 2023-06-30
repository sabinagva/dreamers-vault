import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function CatalogList() {
  const dispatch = useDispatch();
  const catalogReducer = useSelector((store) => store.catalogReducer);

  useEffect(() => {
    dispatch({ type: "GET_CATALOG" });
  }, []);

  return (
    <div>
      <h2>PLAYED GAMES</h2>
      {catalogReducer?.map((catalog, i) => (
        <CatalogItem key={i} catalog={catalog} />
      ))}
    </div>
  );
}

function CatalogItem({ catalog }) {
  const [showDialog, setShowDialog] = useState(false);
  const [description, setDescription] = useState("")
  const [rating, setRating] = useState("")

const addDialog = (event) => {
  axios.post('/catalog', {description:description, rating:rating})
  .then( response => {
    event.preventDefault();
    setDescription("");
    setRating("")
  })
  .catch(errr => {
    console.log('error posting into database', error)
  })
}

  const handleEditGame = () => {
    setShowDialog(true);
  };

  return (
    <div>
      <img src={catalog.image_url} alt="Game Cover" />
      {catalog.played_game_name}
      <section>
        <button
          type="button"
          className="nes-btn is-primary"
          onClick={handleEditGame}
        >
          Edit Game
        </button>
        {showDialog && (
          <dialog className="nes-dialog" open>
            <form method="dialog">
              <p>Description:</p>
              <form onSubmit={addDialog}>
              <input 
                className="nes-container" 
                type="text"
                placeholder= "Description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                >
              </input>

              <p>Rating:</p>
              <input 
                className="nes-container" 
                type="text"
                placeholder= "Rating"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
                >
              </input>
              </form>
              <menu className="dialog-menu">
                <button className="nes-btn">Cancel</button>
                <button className="nes-btn is-primary">Confirm</button>
              </menu>
            </form>
          </dialog>
        )}
      </section>
    </div>
  );
}

export default CatalogList;


