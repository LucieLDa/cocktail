import { Component, inject } from '@angular/core';
import { CocktailService } from '../cocktail.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cocktail-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cocktail-list.component.html',
  styleUrl: './cocktail-list.component.css'
})
export class CocktailListComponent {

  private cocktailService = inject(CocktailService);

  cocktails = this.cocktailService.getCocktails();
}
