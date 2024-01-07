import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dizionario',
  template: `
    <div class="row">
      <div class="col-lg-4 mb-4" *ngFor="let gusto of gusti; let i = index">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ gusto.key }}</h5>
            <p class="card-text">Colore del pacchetto: {{ gusto.value.colore_pacchetto }}</p>
            <p class="card-text">Prezzo: {{ gusto.value.prezzo }} euro</p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .card {
      border: 1px solid #ddd;
      border-radius: 5px;
      margin-bottom: 10px;
    }
  `]
})
export class DizionarioComponent {
  @Input() pringlesDict: { [key: string]: { colore_pacchetto: string, prezzo: number } } = {};
  
  getOrderedPringles(): { key: string, value: { colore_pacchetto: string, prezzo: number } }[] {
    const pringlesList = Object.entries(this.pringlesDict);
    pringlesList.sort((a, b) => a[0].localeCompare(b[0]));
    return pringlesList.map(([key, value]) => ({ key, value }));
  }
  
  get gusti() {
    return this.getOrderedPringles();
  }
}