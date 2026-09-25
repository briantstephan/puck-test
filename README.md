# Puck input test

This small app tests a text input inside the Puck canvas. It uses the published `@puckeditor/core` version `0.23.0`. It does not use the local Puck source or any other app.

## Run the app

Use Node.js 20.19 or newer in the Node.js 20 series, or use Node.js 22.12 or newer.

```sh
npm ci
npm run dev
```

Open the local URL that Vite prints.

## Share the site

The repository is private now, so the workflow does not publish it. When you want to share the site:

1. Make the repository public.
2. In **Settings > Pages**, set **Source** to **GitHub Actions**.
3. Run **Publish site to GitHub Pages** from the **Actions** tab. New commits to `main` will also publish the site.

After the workflow succeeds, share this URL:

https://briantstephan.github.io/puck-test/

## Test the keys

1. Select the Input block in the editor. The block is on the canvas when the page opens.
2. Press `Cmd+I` on macOS or `Ctrl+I` on Windows or Linux to enter interactive mode.
3. Click the text input. Type `abc` after the initial text.
4. Press Backspace. The last character should go away. Move the cursor left, then press Delete. The character after the cursor should go away. On macOS, use `Fn+Delete` for forward Delete.
5. Check that the input still has focus and the Input block stays on the canvas.
6. Press `Cmd+I` or `Ctrl+I` again to return to edit mode. Select the block, click outside the input, and press Backspace. Puck should remove the selected block.

Reload the page to reset the test. The input value is local to the browser and is not saved.

## Observed result

In the Codex in-app browser on macOS, the input accepted `abc` in interactive mode. Backspace and Delete did not change the text. The Input block stayed on the canvas. In edit mode, Backspace removed the selected block. Check the result in your own browser before you send a bug report.

## Text for a Puck bug report

Use this text only if the issue occurs in version `0.23.0`. Add the browser, operating system, and the result that you see.

### Description

Backspace or Delete does not edit a text input inside a Puck component in interactive mode.

### Environment

- Puck: `@puckeditor/core@0.23.0`
- React: `19.2.1`
- Browser and operating system: [add your values]
- Build tool: Vite

### Steps to reproduce

1. Run this app with `npm ci` and `npm run dev`.
2. Select the Input block and press `Cmd+I` or `Ctrl+I`.
3. Focus the input, type `abc`, and press Backspace or Delete.

### What happens

In the Codex in-app browser on macOS, the input accepts `abc`, but Backspace and Delete do not change the text. The Input block stays on the canvas. [Replace this text if your browser gives a different result.]

### What I expect to happen

Backspace and Delete edit the focused input. Puck does not remove the Input block.
