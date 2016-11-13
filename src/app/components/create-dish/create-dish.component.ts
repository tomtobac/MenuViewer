import { DatabaseService } from './../../services/database.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-create-dish',
  templateUrl: './create-dish.component.html',
  styleUrls: ['./create-dish.component.css']
})
export class CreateDishComponent implements OnInit {

  form: FormGroup;
  isSubmitted: boolean = false;
  @ViewChild('fileInput') fileInput: ElementRef;
  @ViewChild('progress') progress: ElementRef;


  constructor(
    private fb: FormBuilder,
    private db: DatabaseService
  ) { 
    this.form = this.fb.group({
      name: [, [Validators.required, Validators.minLength(4)]],
      // file: [, [Validators.required]],
    })
  }

  ngOnInit() {}

  onAdd(item): void {
    this.isSubmitted = true;
    let file = this.fileInput.nativeElement.files[0];
    this.db.uploadFile(file, this.progress)
      .then(url => {
        item.src = url;
        this.db.addItem(item);
      })
      .catch(err => console.log(err))
  }

}
