import { Component } from '@angular/core';
import { ProductType } from "./types/product.type";
import {DescriptionType} from "./types/description.type";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public showPresent: boolean = true;

  public products: ProductType[] = [
    {
      image: '1.png',
      title: 'Макарун с малиной',
      price: '1,70'
    },
    {
      image: '2.png',
      title: 'Макарун с манго',
      price: '1,45'
    },
    {
      image: '3.png',
      title: 'Пирог с ванилью',
      price: '2,70'
    },
    {
      image: '4.png',
      title: 'Пирог с фисташками',
      price: '2,85'
    }
  ];

  public descriptions: DescriptionType[]  = [
    {
      title: 'Лучшие продукты',
      textInfo: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты, ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      textInfo: 'Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок.'
    },
    {
      title: 'Бисквитное тесто',
      textInfo: 'Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!'
    },
    {
      title: 'Честный продукт',
      textInfo: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    }
  ];

  public formValues: {productTitle: string, name: string, phone: string} = {
    productTitle: '',
    name: '',
    phone: ''
  }

  public footerValues: {instagram: string, phone: string} = {
    instagram:  'macaroons.com',
    phone: '+375 (29) 368-98-68'
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: 'smooth'})
  }

  public addToCart(product: ProductType, target: HTMLElement): void {
    this.scrollTo(target);

    this.formValues.productTitle = product.title.toUpperCase();
  }
}
