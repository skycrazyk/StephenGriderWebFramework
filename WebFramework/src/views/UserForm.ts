import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [K: string]: () => void } {
    return {
      'click:#set-random-age': this.onSetRandomClick,
      'click:#set-name': this.onSetName,
      'click:#save-user': this.onSaveUser,
    };
  }

  onSaveUser = () => {
    this.model.save();
  };

  onSetRandomClick = () => {
    this.model.setRandomAge();
  };

  onSetName = () => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };

  template(): string {
    return `
      <div>
        <input placeholder="${this.model.get('name')}"/>
        <button id="set-name">Set name</button>
        <button id="set-random-age">Set random age</button>
        <button id="save-user">Save user</button>
      </div>
    `;
  }
}
