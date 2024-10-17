import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../services/animal.service';
import { ImageProcessingService } from '../services/image-processing.service';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.css']
})
export class AnimalDetailsComponent implements OnInit {
  animal: any | undefined;

  constructor(
    private route: ActivatedRoute,
    private animalService: AnimalService,
    private imageProcessingService: ImageProcessingService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.animalService.getById(id).subscribe((result: any) => {
        console.log(result);
        this.animal = result;
        this.animal.image = this.imageProcessingService.createImages(this.animal.animalImage[0]);
        this.animal = this.setAnimalAge(this.animal)
        this.animal = this.setAnimalType(this.animal);
        this.animal = this.setAnimalSex(this.animal);
      });    
    }
  }

  setAnimalAge(animal: any) {
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
    return animal;
  }

  setAnimalType(animal: any) {
    if(animal.animalType == "DOG") {
      animal.animalType = "Cachorro";
    }
    if(animal.animalType == "CAT") {
      animal.animalType = "Gato";
    }
    return animal;
  }

  setAnimalSex(animal: any) {
    if(animal.animalSex == "MALE") {
      animal.animalSex = "Macho";
    }
    if(animal.animalSex == "FEMALE") {
      animal.animalSex = "Fêmea";
    }
    return animal;
  }
}
