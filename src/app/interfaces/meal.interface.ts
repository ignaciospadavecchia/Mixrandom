// Url referencia: https://www.themealdb.com/api/json/v1/1/list.php?c=list

// {
//     "meals": [
//     {
//     "strCategory": "Beef"
//     },
//     {
//     "strCategory": "Breakfast"
//     },
// }

export interface ICategorias {
    meals: ICategoria[];
}

export interface ICategoria {
    strCategory: string;
}

// Url referencia: https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert

export interface IRecetas {
    meals: IReceta[];
}

export interface IReceta {
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
}