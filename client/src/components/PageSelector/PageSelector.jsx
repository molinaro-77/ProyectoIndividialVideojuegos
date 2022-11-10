import React from 'react';

export default function PageSelector(props){
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(props.gameQuantity/props.gamesPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <div>
            <span>Componente Page Selector</span>
            <ul>
                {pageNumbers.map(pageNumber => {
                    return <li key={pageNumber} onClick={()=> props.selectPage(pageNumber)}>
                        {pageNumber}
                    </li>
                })}
            </ul>
        </div>
    )

}