import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
  @Input() rating: number = 5;

  @Output() ratingChange: EventEmitter<Number> = new EventEmitter();

  items: any;
  constructor() {
    this.items = [
      {
        name: "Homer",
        description: "this is Homer",
        rating: 4,
        image: "assets/image/0001.png"
      },
      {
        name: "Bart",
        description: "this is Bart",
        rating: "3",
        image: "assets/image/0004.png"
      },
      {
        name: "Marge",
        description: "this is Marge",
        rating: "4",
        image: "assets/image/0005.png"
      },
      {
        name: "Lisa",
        description: "this is Lisa",
        rating: "5",
        image: "assets/image/0002.png"
      },
      {
        name: "Maggie",
        description: "this is Maggie",
        rating: "2",
        image: "assets/image/0003.png"
      },
      {
        name: "Homer",
        description: "this is Homer",
        rating: 4,
        image: "assets/image/0001.png"
      },
      {
        name: "Bart",
        description: "this is Bart",
        rating: "3",
        image: "assets/image/0004.png"
      },
      {
        name: "Marge",
        description: "this is Marge",
        rating: "4",
        image: "assets/image/0005.png"
      },
      {
        name: "Lisa",
        description: "this is Lisa",
        rating: "5",
        image: "assets/image/0002.png"
      },
      {
        name: "Maggie",
        description: "this is Maggie",
        rating: "2",
        image: "assets/image/0003.png"
      }
    ];
  }

  ngOnInit() {}

  rate(index: number) {
    this.rating = index;
    this.ratingChange.emit(this.rating);
  }

  getColor(index: number) {
    if (this.isAboveRating(index)) {
      return COLORS.GREY;
    }
    switch (this.rating) {
      case 1:
      case 2:
      // return COLORS.RED;
      case 3:
      case 4:
      case 5:
        // return COLORS.GREEN;
        return COLORS.YELLOW;

      default:
        return COLORS.GREY;
    }
  }

  isAboveRating(index: number): boolean {
    return index > this.rating;
  }

  goTo() {
    //this.nav.push()
  }
}

enum COLORS {
  GREY = "#E0E0E0",
  GREEN = "#76FF03",
  YELLOW = "#FFCA28",
  RED = "#DD2C00"
}
