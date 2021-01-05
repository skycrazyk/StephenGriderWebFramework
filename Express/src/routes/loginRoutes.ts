import { Router } from 'express';

const router = Router();

router.get('/login', (req, res) => {
  res.send(`
    <form method="POST">
      <h1>Login</h1>
      <div>
        <label>Email</label>
        <input name="email" type="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  `)
})

router.post('/login', (req, res) => {
  const { email, password} = req.body;

  res.send(email + password);
})


export { router }