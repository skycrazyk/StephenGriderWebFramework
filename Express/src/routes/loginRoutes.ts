import { Router, Request } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const router = Router();

router.get('/login', (req, res) => {
  res.send(`
    <form method="POST">
      <h1>Login</h1>
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  `);
});

router.post('/login', (req: RequestWithBody, res) => {
  const { email, password } = req.body;

  if (email === 'hi@hi.com' && password === 'pass') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('Invalid email of password');
  }
});

export { router };
