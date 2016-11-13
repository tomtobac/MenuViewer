import { DatabaseService } from './../../services/database.service';
import { Dish } from './../../interfaces/dish';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  dishes: Dish[] = [];
  search: string;

  constructor(private db: DatabaseService) {
    db.items.subscribe(res => this.dishes = res);
  }

  ngOnInit() {

  }

}
