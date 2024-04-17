import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
  getFoodById(id: number): Foods {
    return this.getAll().find(food => food.id == id)!;
  }
  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 10 },
      { name: 'FastFood', count: 5 },
      { name: 'Pizza', count: 3 },
      { name: 'Lunch', count: 4 },
      { name: 'Healthy', count: 3 },
      { name: 'Roll', count: 3 },
      { name: 'Cakes', count: 1 },
      { name: 'Burger', count: 2 }

    ]
  }

  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Calcutta Paneer Veg Roll',
        cookTime: '10 - 20',
        price: 400,
        favorite: true,
        rating: 3,
        origins: ['Italy', 'North Indian'],
        imageUrl: '/assets/1.avif',
        tags: ['North Indian', 'Roll', 'Chinese', 'Sichuan', 'paneer', 'FastFood']
      },
      {
        id: 2,
        name: 'Mix Fruit With Salad',
        cookTime: '10 - 20',
        price: 100,
        favorite: false,
        rating: 3,
        origins: ['italy', 'Indian', 'maxican'],
        imageUrl: '/assets/2.jpeg',
        tags: ['Healthy', 'Beverages', 'Salad', 'Juices', 'Soup', 'Lunch']
      },
      {
        id: 3,
        name: 'Mexican Fiesta Cheese',
        cookTime: '25 - 30',
        price: 1500,
        favorite: true,
        rating: 5,
        origins: ['italy'],
        imageUrl: '/assets/3.avif',
        tags: ['Cafe', 'North Indian', 'Sandwich', 'Pizza', 'Burger', 'FastFood', 'Chinese', 'Desserts', 'Lunch']
      },
      {
        id: 4,
        name: 'Chocolate Cakes',
        cookTime: '15 - 20',
        price: 2000,
        favorite: true,
        rating: 4,
        origins: ['italy', 'Indian'],
        imageUrl: '/assets/4.jpeg',
        tags: ['Bakery', 'Desserts', 'Ice Cream', 'Mithai', 'Beverages', 'Chocolate', 'Fruits', 'Cakes']
      },
      {
        id: 5,
        name: 'Chinese',
        cookTime: '30 - 40',
        price: 400,
        favorite: true,
        rating: 3,
        origins: ['Indian', 'Chinese'],
        imageUrl: '/assets/5.jpeg',
        tags: ['Chinese', 'Momos', 'thai', 'FastFood', 'street food', 'Lunch']
      },
      {
        id: 6,
        name: 'Grill Inn Burger',
        cookTime: '10 - 20',
        price: 500,
        favorite: true,
        rating: 5,
        origins: ['Italy'],
        imageUrl: 'assets/6.avif',
        tags: ['Burger', 'Beverages', 'FastFood', 'chinese', 'Pizza']

      },
      {
        id: 7,
        name: 'Biryani',
        cookTime: '20 - 25',
        price: 1500,
        favorite: true,
        rating: 2,
        origins: ['italy'],
        imageUrl: '/assets/7.jpeg',
        tags: ['North Indian', 'Continental', 'Lunch', 'mughlai', 'seafood', 'hydrabadi biryani', 'Healthy']
      },
      {
        id: 8,
        name: 'Taco Bell',
        cookTime: '10 - 20',
        price: 300,
        favorite: true,
        rating: 4,
        origins: ['italy', 'Mexican'],
        imageUrl: '/assets/8.avif',
        tags: ['Mexican', 'Wraps', 'FastFood', 'Roll', 'Healthy', 'Pizza']
      },

    ];
  }
}
