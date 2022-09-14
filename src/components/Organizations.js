import React, { useState } from "react";
import ReactPaginate from "react-paginate";


function Organizations(){
    const organizationsVariables =[
        {
            'id':1,
            'Name':"Lorem Ipsum1",
            'Description':"Quis varius quam quisque id diam vel quam elementum polvinar",
            'Adres':"Egestas,sed,tempus",
        },
        {
            'id':2,
            'Name':"Lorem Ipsum2",
            'Description':"Quis varius quam quisque id diam vel quam elementum polvinar",
            'Adres':"Egestas,sed,tempus",
        },
        {
            'id':3,
            'Name':"Lorem Ipsum3",
            'Description':"Quis varius quam quisque id diam vel quam elementum polvinar",
            'Adres':"Egestas,sed,tempus",
        },
        {
            'id':4,
            'Name':"Lorem Ipsum4",
            'Description':"Quis varius quam quisque id diam vel quam elementum polvinar",
            'Adres':"Egestas,sed,tempus",
        },
        {
            'id':5,
            'Name':"Lorem Ipsum5",
            'Description':"Quis varius quam quisque id diam vel quam elementum polvinar",
            'Adres':"Egestas,sed,tempus",
        },
        {
            'id':6,
            'Name':"Lorem Ipsum6",
            'Description':"Quis varius quam quisque id diam vel quam elementum polvinar",
            'Adres':"Egestas,sed,tempus",
        },
        {
            'id':7,
            'Name':"Lorem Ipsum7",
            'Description':"Quis varius quam quisque id diam vel quam elementum polvinar",
            'Adres':"Egestas,sed,tempus",
        },
        {
            'id':8,
            'Name':"Lorem Ipsum8",
            'Description':"Quis varius quam quisque id diam vel quam elementum polvinar",
            'Adres':"Egestas,sed,tempus",
        },
        {
            'id':9,
            'Name':"Lorem Ipsum9",
            'Description':"Quis varius quam quisque id diam vel quam elementum polvinar",
            'Adres':"Egestas,sed,tempus",
        },
    ]
    const [organization, setOrganization] = useState(organizationsVariables.slice(0, 6));
    const [pageNumber,setPageNumber] = useState(0)

    const organizationsPerPage = 3
    const pagesVisited = pageNumber * organizationsPerPage

    const displayOrganizations = organization
        .slice(pagesVisited, pagesVisited + organizationsPerPage)
        .map((organization) => {
            return (
                <div className={'FundactionsWeHelp'}>
                    <h1>{organization.Name}</h1>
                    <h3>{organization.Description}</h3>
                    <p>{organization.Adres}</p>
                </div>
            )
        })

    const pageCount = Math.ceil(organization.length / organizationsPerPage)
    const changePage = ({selected}) => {
        setPageNumber(selected);
    };
    return(
        <div className={"organizationInfo"}>
            {displayOrganizations}
            <ReactPaginate
                previousLabel={""}
                nextLabel={""}
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
export default Organizations