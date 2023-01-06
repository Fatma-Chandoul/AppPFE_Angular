import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pfe: any;
  types: any;
  long: number = 0;
  titre: string = '';
  constructor(private serv: GestionService) {}

  ngOnInit(): void {
    this.getPfes();
    this.getTypes();
  }

  getPfes() {
    this.serv.getPfes().subscribe({
      next: (data: any) => {
        this.pfe = data;
        console.log(data);
        this.long = data.length;
      },
      error: (err: any) => {},
      complete: () => {},
    });
  }
  getPfeByType(id: number) {
    this.serv.getPfeByType(id).subscribe({
      next: (data: any) => {
        this.pfe = data;
      },
      error: (err: any) => {},
      complete: () => {},
    });
  }
  getTypes() {
    this.serv.getTypes().subscribe({
      next: (data: any) => {
        this.types = data;
      },
      error: (err: any) => {},
      complete: () => {},
    });
  }

  gettitre() {
    if (this.titre.length == 0) {
      this.getPfes();
    }
    if (this.titre.length > 0) {
      this.serv.getPfesBytitre(this.titre).subscribe({
        next: (data: any) => {
          this.pfe = data;
        },
        error: (err: any) => {},
        complete: () => {},
      });
    }
  }
  delete(id: number) {
    this.serv.delete(id).subscribe({
      next: (data: any) => {
        this.getPfes();
      },
      error: (err: any) => {},
      complete: () => {},
    });
  }
}

