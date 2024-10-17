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

      this.animais.forEach(animal => {
        if (animal.animalAge == "BELOW_TWO_MONTHS") {
          animal.animalAge = "Menos que dois meses"
        }
        if (animal.animalAge == "TWO_TO_SIX_MONTHS") {
          animal.animalAge = "De dois a seis meses"
        }
        if (animal.animalAge == "SEVEN_TO_ELEVEN_MONTHS") {
          animal.animalAge = "De sete a onze meses"
        }
        if (animal.animalAge == "ONE_YEARS") {
          animal.animalAge = "Um ano"
        }
        if (animal.animalAge == "TWO_YEARS") {
          animal.animalAge = "Dois anos"
        }
        if (animal.animalAge == "THREE_YEARS") {
          animal.animalAge = "Três anos"
        }
        if (animal.animalAge == "FOUR_YEARS") {
          animal.animalAge = "Quatro anos"
        }
        if (animal.animalAge == "FIVE_YEARS") {
          animal.animalAge = "Cinco anos"
        }
        if (animal.animalAge == "MORE_SIX_YEARS") {
          animal.animalAge = "Mais de seis anos"
        }
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
    return this.animais.filter(animal => animal.animalType === this.filtro);
  }
}
