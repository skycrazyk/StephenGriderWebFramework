import { User } from "./models/User";

const user = new User({ name: "second user", age: 1111 });

user.save();
