import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit';
import { ProductsService } from '../services/products.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-produit',
  templateUrl: './list-produit.component.html',
  styleUrls: ['./list-produit.component.css']
})

export class ListProduitComponent implements OnInit {
  produits: Produit[] = []
  constructor(private http: HttpClient) {

  }
  ngOnInit(): void {
    // this.produits = this.ps.getAllProduct()
    this.http.get<Produit[]>("http://localhost:3000/produits")
      .subscribe({
        next: data => { this.produits = data }
        , error: err => {
          console.log(err);
        }
      })
  }
  // produits: Produit[] = [{ id: 1, nom: "pc", prix: 0, quantite: 12, urlimg: "./assets/img/pc.png" },
  // { id: 2, nom: "phone", prix: 0, quantite: 12, urlimg: "./assets/img/phone.png" },]
  nb = "masquer";
  afficher() {
    console.log("afficher")
    if (this.nb == "masquer") {
      this.nb = "afficher"
    } else {
      this.nb = "masquer"
    }
  }
}
