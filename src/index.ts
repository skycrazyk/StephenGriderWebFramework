import { User } from "./models/User";

const user = new User({ name: "second user", age: 1111 });

user.events.on("change", () => {
  console.log("change!");
});

user.events.trigger("change");
