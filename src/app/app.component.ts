import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ls-todo-list';

  items = [
    new Item(false, 'Hit the gym'),
    new Item(true, 'Pay bills'),
    new Item(false, 'Meet George'),
    new Item(false, 'Buy eggs'),
    new Item(false, 'Read a book'),
    new Item(false, 'Organize office'),
  ];

  // add a new list item
  addItem(name: string) {
    if (name) {
      this.items.push(new Item(false, name));
    } else {
      alert('You must write something!');
    }
  };

  // toggle check on a list item
  checkItem(item: Item) {
    item.checked = !item.checked;
  }

  // remove a list item
  removeItem(item: Item) {
    let index = this.items.indexOf(item);
    this.items.splice(index, 1);
  }
}
