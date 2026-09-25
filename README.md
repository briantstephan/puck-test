# Puck test

This small app tests specific Puck editor functionality and potential bugs.

## Run the app

Use Node.js 20.19 or newer in the Node.js 20 series, or use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

Open the local URL that Vite prints.

## Share a test

Edit `src/main.tsx` to show one case. Push the change to `main`. The Pages workflow will publish it at https://briantstephan.github.io/puck-test/.

Keep each test in its own commit. Revert that commit and push to restore the base version.
