import { User } from '../models/User';
import { View } from './View';

export class UserForm extends View {
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
}
