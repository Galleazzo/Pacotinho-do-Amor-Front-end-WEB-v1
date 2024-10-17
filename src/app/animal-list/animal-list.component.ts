import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../services/animal.service';
import { ImageProcessingService } from '../services/image-processing.service';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {
  animais: any[] = [];
  filtro: string = 'todos'; // Pode ser 'gatos', 'cachorros' ou 'todos'

  constructor(private animalService: AnimalService, private imageProcessingService: ImageProcessingService) {}

  ngOnInit(): void {
    this.animalService.getAnimais().subscribe((data) => {
      this.animais = data;
      this.animais.forEach(animal => {
        animal = this.imageProcessingService.createImages(animal.animalImage[0])
      })
      console.log(this.animais)
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
