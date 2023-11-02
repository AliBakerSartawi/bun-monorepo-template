import type { AppRouter } from '@acme/trpc-server';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:5000/trpc'
      // You can pass any HTTP headers you wish here
      // async headers() {
      //   return {
      //     // Authorization: getAuthCookie()
      //   };
      // }
    })
  ]
});
