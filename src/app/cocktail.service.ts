import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  constructor() { }

  cocktails : Cocktail[] = [
    {nom : "Negroni ", prix : 10, image : "https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_Mojito_1ou2cocktails_cre%CC%81dit.KP_H-1-1024x576.jpg"},
    {nom : "Margarita ", prix : 12, image : "https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_Margarita_1ou2cocktails_cre%CC%81dit.KP_H-1024x576.jpg"},
    {nom : "Mojito ", prix : 8, image : "https://1ou2cocktails.com/wp-content/uploads/2021/01/Cocktail_Mojito_1ou2cocktails_cre%CC%81dit.KP_H-1024x576.jpg"}
  ];

  getCocktails() : Cocktail[]{
    return this.cocktails;
  }
}

interface Cocktail {
  nom: string;
  prix: number;
  image: string;
}