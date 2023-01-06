import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GestionService } from '../gestion.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  types: any;
  pfes: any;
  long: number = 0;
  titre: any;
  pfe: any = {
    titre: '',
    type: {
      id: '',
    },
  };
  constructor(private serv: GestionService, private route: Router) {}

  ngOnInit(): void {
    this.getTypes();
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

  Add() {
    this.serv.Add(this.pfe).subscribe({
      next: (data: any) => {
        this.route.navigate(['pfes']);
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

  getPfes() {
    this.serv.getPfes().subscribe({
      next: (data: any) => {
        this.pfes = data;
        console.log(data);
        this.long = data.length;
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
}
