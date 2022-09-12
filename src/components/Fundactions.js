import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import fundactions from "./Fundactions";

    // {
    //     'id':9,
    //     'Name':"Lorem Ipsum1",
    //     'Description':"Quis varius quam quisque id diam vel quam elementum polvinar",
    //     'Adres':"Egestas,sed,tempus",
    // },

function Fundactions(){
    const [fundaction, setFundaction] = useState(functionsVarables.slice(0,3));
    const [pageNumber,setPageNumber] = useState(0)
    const functionsVarables =['1',2,3,4,5,6,7,8,9]
    const fundactionPerPage = 10
    const pagesVisited = pageNumber * fundactionPerPage
    const displayFundactions = fundaction.slice(pagesVisited, pagesVisited+fundactionPerPage).map(fundaction)

    const pageCount = Math.ceil(fundaction.length / fundactionPerPage)
    const changePage = (selected) =>{
        setPageNumber(selected);
    }
    return(
        <div className={"organizationInfo"}>
            {displayFundactions}
            <ReactPaginate
                previusLabel={"previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={'paginationBtn'}
                previousLinkClassName={'previousBtn'}
                nextLinkClassName={'nextBtn'}
                disabledClassName={'paginationDisabled'}
                activeClassName={'paginationActive'}
            />
        </div>
    )
}
export default Fundactions