import { Injectable } from '@angular/core';
import { Produit } from '../model/produit';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  produits: Produit[] = [{ id: 1, nom: "pc", prix: 0, quantite: 12, urlimg: "./assets/img/pc.png" },
  { id: 2, nom: "phone", prix: 0, quantite: 12, urlimg: "./assets/img/phone.png" },]

  getAllProduct() {
    return this.produits;
  }
  constructor() { }
}
