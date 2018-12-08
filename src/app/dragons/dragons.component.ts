import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {DragonService} from '../services/dragon.service';

@Injectable()
@Component({
  selector: 'app-dragons',
  templateUrl: './dragons.component.html',
  styleUrls: ['./dragons.component.scss'],
  providers: [DragonService]
})
export class DragonsComponent implements OnInit {

  constructor(private dragonService: DragonService) { 
    
  }

  ngOnInit() {
    this.dragonService.get();
    // console.log(source);
  }

}
