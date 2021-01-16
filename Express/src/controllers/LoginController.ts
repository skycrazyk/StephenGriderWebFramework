import { Request, Response } from 'express';
import { get, controller, use } from './decorators';

@controller('/auth')
class LogitController {
  @get('/login')
  getLogin(req: Request, res: Response) {
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
  }
}
