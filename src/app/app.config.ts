import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// class Product {
//   String id;
//   String numel;
//   String desc;
//   DOuble price;
// }

// class Product {
//   let id;
//   let nume;
//   let desc;
//   let price;

//   //let declara o variabla

//   constructor(id, nume, desc, price) {
//     //
//     this.id = id;
//   }
// }

// class Product {
//   id: string;
//   nume: string;
//   desc: string;
//   price: number;
// }

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideHttpClient()]
};