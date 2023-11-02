import { z } from 'zod';
import { t } from '../trpc';

export const userRouter = t.router({
  find: t.procedure.query(async () => {
    const users = [1, 2, 3];
    return users;
  }),
  findById: t.procedure.input(z.number()).query(async (opts) => {
    const { input } = opts;
    const user = [1, 2, 3].find((u) => u === input);
    return user;
  }),
  create: t.procedure
    .input(z.object({ name: z.string() }))
    .mutation(async (opts) => {
      const { input } = opts;
      const user = { name: '' };
      user.name = input.name;
      return user;
    })
});
