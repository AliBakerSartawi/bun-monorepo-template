import { t } from '../trpc';
import { userRouter } from './user.router';

export const appRouter = t.router({
  user: userRouter
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
