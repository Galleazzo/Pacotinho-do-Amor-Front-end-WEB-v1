import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animais: any[] = [];
  filtro: string = 'todos'; // Pode ser 'gatos', 'cachorros' ou 'todos'

  constructor(private animalService: AnimalService) {}

  ngOnInit(): void {
    this.animalService.getAnimais().subscribe((data) => {
      this.animais = data;
    });
  }

  filtrarAnimais(tipo: string) {
    this.filtro = tipo;
  }

  getAnimaisFiltrados() {
    if (this.filtro === 'todos') {
      return this.animais;
    }
    return this.animais.filter(animal => animal.tipo === this.filtro);
  }
}
