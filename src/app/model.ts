export class Model {
  user: string;
  items: Array<any>;

  constructor() {
    this.user = 'Kaan';
    this.items = [
      new TodoItem('Go to the gym', true),
      new TodoItem('Buy Groceries for Breakfast', false),
      new TodoItem('Write a invoice', false),
      new TodoItem('Buy cinema tickets', false),
    ];
  }
}

export class TodoItem {
  description: string;
  action: boolean;

  constructor(description: string, action: boolean) {
    (this.description = description), (this.action = action);
  }
}

const model = new Model();
