# NestJS openapi bug repro repo

This repo exists to reproduce the bug from [this issue](https://github.com/nestjs/swagger/issues/1211).

To see the bug, start the server `npm run start:dev` and navigate to `localhost:3000/api` in your browser.

When looking at the default route's schema you can see that the RecordDTO misses the `nested` prop's reference to the DTO
