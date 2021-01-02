import { User } from '../models/User';

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.bindModel();
  }

  bindModel(): void {
    this.model.on('change', () => this.render());
  }

  eventsMap(): { [K: string]: () => void } {
    return {
      'click:#set-random-age': this.onSetRandomClick,
      'click:#set-name': this.onSetName,
    };
  }

  onSetRandomClick = () => {
    this.model.setRandomAge();
  };

  onSetName = () => {
    const input = this.parent.querySelector('input');
    const name = input.value;

    this.model.set({ name });
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}</div>
        <div>User age: ${this.model.get('age')}</div>
        <input />
        <button id="set-name">Set name</button>
        <button id="set-random-age">Set random age</button>
      </div>
    `;
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();

    for (let eventKey in eventsMap) {
      const [eventName, selector] = eventKey.split(':');

      fragment.querySelectorAll(selector).forEach((element) => {
        element.addEventListener(eventName, eventsMap[eventKey]);
      });
    }
  }

  render(): void {
    this.parent.innerHTML = '';

    const templateElement = document.createElement('template');
    templateElement.innerHTML = this.template();

    this.bindEvents(templateElement.content);

    this.parent.append(templateElement.content);
  }
}
