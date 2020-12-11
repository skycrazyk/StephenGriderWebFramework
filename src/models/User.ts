import axios from "axios";
import { Eventing } from "./Eventing";

interface UserProps {
  name?: string;
  age?: number;
  id?: number;
}

export class User {
  events: Eventing = new Eventing();

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  fetch(): void {
    axios.get(`http://localhost:3000/users/${this.get("id")}`).then((res) => {
      this.set(res.data);
    });
  }

  save(): void {
    const id = this.get("id");

    if (id) {
      axios.put(`http://localhost:3000/users/${this.get("id")}`, this.data);
    } else {
      axios.post("http://localhost:3000/users", this.data);
    }
  }
}
