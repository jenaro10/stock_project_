export class Producto {
    name: string;
    description: string;
    imageURL: string;
    buyDate: Date;
    creationDate: Date;
    price: number;
    propertyStatus: string;
    locationBelongs: string;
    actualLocation: string;
    
  
    constructor(name: string, description: string, buyDate: Date, creationDate: Date, imageURL: string, price: number, propertyStatus: string, locationBelongs: string ,actualLocation: string) {
      this.name = name;
      this.description = description;
      this.imageURL = imageURL;
      this.buyDate = buyDate;
      this.creationDate = creationDate;
      this.price = price;
      this.propertyStatus = propertyStatus;
      this.locationBelongs = locationBelongs;
      this.actualLocation = actualLocation;

    }
  }
  