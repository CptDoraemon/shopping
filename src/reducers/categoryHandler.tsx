import { viewEnum } from "../actions";
import { ProductInfo } from "../actions";
import { Category } from "../actions";

const categoryHandler = (state: Array<Category> = [], action: any) => {
    switch (action.type) {
        case 'GET_CATEGORIES':
            return action.categories;
        case 'SET_CATEGORY':

           if (action.categoryTarget === 'all') {
               return state.map(category => {
                   category.isActive = category.name === 'all';
                   return category;
               });
           } else {
               return state.map(category => {
                   if (category.name === action.categoryTarget) category.isActive = !category.isActive;
                   if (category.name === 'all') category.isActive = false;
                   return category;
               });
           }
        default:
            return state;
    }
};

export default categoryHandler;