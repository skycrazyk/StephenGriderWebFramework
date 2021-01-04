import { View } from './View';
import { User, UserProps } from '../models/User';
import { UserForm } from './UserForm';
import { UserShow } from './UserShow';

export class UserEdit extends View<User, UserProps> {
  regionsMap(): { [K: string]: string } {
    return {
      userShow: '#user-show',
      userForm: '#user-form',
    };
  }

  onRender(): void {
    new UserForm(this.regions.userForm, this.model).render();
    new UserShow(this.regions.userShow, this.model).render();
  }

  template(): string {
    return `
      <div>
        <div id="user-show"></div>
        <div id="user-form"></div>
      </div>
    `;
  }
}
