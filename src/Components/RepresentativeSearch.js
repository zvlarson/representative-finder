import { useState } from "react";
import { APIKEY } from "../config";
import RepresentativeSearchResults from "./RepresentativeSearchResults";

function RepresentativeSearch({user}) {
  const [address, setAddress] = useState("")
  const [offices, setOffices] = useState([])
  const [officials, setOfficials] = useState([])

  console.log('USER ====>', user)

  const searchRepresentatives = () => {
    fetch(
      `https://civicinfo.googleapis.com/civicinfo/v2/representatives?address=${address}&key=${APIKEY}`
    )
      .then(response => response.json())
      .then(json => {
          setOffices(json.offices)
          setOfficials(json.officials)
          return
      })
      .catch(error => console.log(error))
  };
  return (
    <div className="search-container">
      <h1>Search for your representatives</h1>
      <input
        name="addressSearch"
        type="text"
        className="search-bar"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
      />
      <div>
        <button className="submit-btn" onClick={() => searchRepresentatives()}>
          Submit
        </button>
      </div>
      <RepresentativeSearchResults offices={offices} officials={officials}/>
    </div>
  );
}

export default RepresentativeSearch;
