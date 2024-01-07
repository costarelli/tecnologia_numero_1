import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container mt-4">
      <h1 class="mt-4 mb-4">Gusti Pringles</h1>
      <app-dizionario [pringlesDict]="pringlesDict"></app-dizionario>
    </div>
  `,
})
export class AppComponent {
  title = 'Sito Pringles';
  pringlesDict = {
    "Original": { colore_pacchetto: "Rosso", prezzo: 2.99 },
    "Sour Cream & Onion": { colore_pacchetto: "Verde", prezzo: 3.49 },
    "BBQ": { colore_pacchetto: "Marrone", prezzo: 3.99 },
    "Cheddar Cheese": { colore_pacchetto: "Arancione", prezzo: 3.29 },
    "Salt & Vinegar": { colore_pacchetto: "Blu", prezzo: 3.79 }
  };
}
