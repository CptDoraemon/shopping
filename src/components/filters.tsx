import React from "react";
import './filters.css';

import { Category } from "../actions";
import { setCategory } from "../actions";

interface FilterItemProps {
    category: Category,
    dispatch: any
}

function FilterItem({ category, dispatch }: FilterItemProps) {
    const activeStyle = {
        backgroundColor: `#${category.hexColor}`,
        border: `2px solid rgba(0,0,0,0)`,
    };
    const inactiveStyle = {
        border: `2px solid #${category.hexColor}`,
        color: `#${category.hexColor}`,
    };
    return (
        <div
            className={'filter-item'}
            style={category.isActive ? {...activeStyle} : {...inactiveStyle}}
            onClick={() => {dispatch(setCategory(category.name))}}
        >
            { category.name }
        </div>
    )
}

interface FiltersProps {
    category: Array<Category>,
    dispatch: any
}

function Filters({ category, dispatch }: FiltersProps) {
    return (
        <div className={'filters-wrapper'}>
            {
                category ? category.map((category: Category) => {
                    return <FilterItem category={category} dispatch={dispatch} key={category.name}/>
                }) : null
            }
        </div>
    )
}

export default Filters;