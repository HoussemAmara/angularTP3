import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../model/produit';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {
  produits: Produit[] = []
  //[{ id: 1, nom: "pc", prix: 0, quantite: 12, urlimg: "./assets/img/pc.png" },
  // { id: 2, nom: "phone", prix: 0, quantite: 12, urlimg: "./assets/img/phone.png" },]
  prod: any
  constructor(private ar: ActivatedRoute, private a: Router, private ps: ProductsService) {

  }
  ngOnInit(): void {
    this.produits = this.ps.getAllProduct()
    let id = this.ar.snapshot.params['id']
    console.log(id)
    this.prod = this.produits.find(x => x.id == id)
  }
  retour() {
    this.a.navigate(['/produit'])
  }
}
