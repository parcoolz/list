import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';

export interface City {
  id: number;
  name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  citiesData: City[] = [
    { id: 0, name: 'New York' },
    { id: 1, name: 'London' },
    { id: 2, name: 'Beijing' },
    { id: 3, name: 'Moscow' }
  ];
  
  constructor(private fb: FormBuilder) { }

  onChangeEventFunc(name: string, isChecked: boolean) {
    const cities = (this.form.controls.name as FormArray);

    if (isChecked) {
      cities.push(new FormControl(name));
    } else {
      const index = cities.controls.findIndex(x => x.value === name);
      cities.removeAt(index);
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: this.fb.array([])
    });
  }

  submit() {
    console.log(this.form.value.name);
  }

}
