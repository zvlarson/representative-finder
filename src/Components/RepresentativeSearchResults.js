import { useContext } from "react";
import { UserContext } from "../App";

function RepresentativeSearchResults(props) {
  const { offices, officials } = props;
  const {userProfile} = useContext(UserContext)

  return (
    <div>
      <h4>Here are your results {userProfile?.firstName}</h4>
      {offices.map((office) => {
        const official = officials[office.officialIndices[0]];
        const address = official?.address && official?.address[0];
        return (
          <div className="representative-info">
            <div className="office-title">{office.name}</div>
            <p>{official?.name}</p>
            <label>
              Phone:&nbsp;
              <a href={`tel:${official?.phones[0]}`}>{official?.phones[0]}</a>
            </label>
            <br />
            {official?.address && 
            <>
            <label> Address:&nbsp;
              <span>
                {address?.line1},&nbsp;{address?.city},&nbsp;{address?.state}
                ,&nbsp;{address?.zip}
              </span>
            </label>
            <br/>
            </>
      }
            {official?.emails && <label>Email:&nbsp;<a href={`mailto:${official?.emails[0]}`}>{official?.emails[0]}</a></label>}
            <br/>
          
            {official?.urls &&
              <>
                <label>Website:&nbsp;
                <a href={official?.urls[0]} target="_blank">
                    {official?.urls[0]}
                </a>
                </label>
                <br/>
                </>
            }
          </div>
        );
      })}
    </div>
  );
}

export default RepresentativeSearchResults;
