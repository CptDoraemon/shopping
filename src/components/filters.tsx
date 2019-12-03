import React from "react";
import './filters.css';

function FilterItem() {
    return (
        <div className={'filter-item'} style={{backgroundColor: '#673AB7'}}>
            Category
        </div>
    )
}

function Filters() {
    return (
        <div className={'filters-wrapper'}>
            <FilterItem />
            <FilterItem />
            <FilterItem />
        </div>
    )
}

export default Filters;