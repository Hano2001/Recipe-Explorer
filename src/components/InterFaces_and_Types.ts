export  interface Iparams {
    c?:string,
    i?:string
  };
export type Tdata = Array<string>

export interface Imain  {
  [index:string] : string;
}

export interface IRecipeObject {
  [index:string| number] :string
}

export interface IcategoryMealObject {
  strMeal:string;
  strMealThumb:string;
  idMeal:string
}

export interface IrecipeDetails {
  main: Imain,
  ingredients: Tdata,
  measures: Tdata
}
 export interface InavBarLinks {
  name:string,
  link:string
 }