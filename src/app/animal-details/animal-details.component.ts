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
      });

      
      
    }
    console.log(this.animal);
    
  }
}
