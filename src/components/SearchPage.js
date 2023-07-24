import React from "react";
import { Link } from "react-router-dom";
import "../pages/SearchPage.css";
// import Response from "./response";
import { useStateValue } from "./StateProvider";
import useGoogleSearch from './useGoogleSearch'
import Search from "./Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ImageIcon from "@mui/icons-material/Image";
function SearchPage() {
  const [{ term='tesla' }, dispatch] = useStateValue();

  // Live Api call
  const {data} = useGoogleSearch(term);
// Mock Api CAll 
//   const data = Response;

  // //https://www.googleapis.com/customsearch/v1/using_rest

  //https://cse.google.com/cse/create/new
  // console.log(data);
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          <img
            className="searchPage_logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </Link>
        <div className="searchPage_headerBody">
          <Search hideButtons />

          <div className="searchPage_options">
            <div className="searchPage_optionsLeft">
              <div className="searchPage_option">
                <SearchIcon />
                <Link to="/search">All</Link>
              </div>
              <div className="searchPage_option">
                <DescriptionIcon />
                <Link to="/search">News</Link>
              </div>
              <div className="searchPage_option">
                <ImageIcon />
                <Link to="/images">Images</Link>
              </div>
              <div className="searchPage_option">
                <LocalOfferIcon />
                <Link to="/search">Shopping</Link>
              </div>
              <div className="searchPage_option">
                <AddLocationAltIcon />
                <Link to="/search">Maps</Link>
              </div>
              <div className="searchPage_option">
                <MoreVertIcon />
                <Link to="/search">More</Link>
              </div>
            </div>
          
          <div className="searchPage_optionsRight">
            <div className="searchPage_option">
              <Link to="/search">Settings</Link>
            </div>
            <div className="searchPage_option">
              <Link to="/search">Tools</Link>
            </div>
          </div>
        </div>
      </div>
      </div>


{term && (

      <div className="searchPage_results">
        <p className="searchPage_resultCount">About {data?.searchInformation.formattedTotalResults}  results ({data?.searchInformation.formattedSearchTime} seconds) for {term}</p>


{data?.items.map(item => <div className="searchPage_result">
    <a href={item.link}>
        {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
            <img className="searchPage_resultImage" src={item.pagemap?.cse_image[0]?.src} alt="" />
        )}

    {item.displayLink}
    </a>
    <a className="searchPage_resultTitle" href={item.link}>
        <h2>{item.title}</h2>
    </a>
    <p className="searchPage_resultSnippet">{item.snippet}</p>
</div>)}
      </div>
)}

    </div>
  );
}

export default SearchPage;
