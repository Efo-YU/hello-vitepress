⚡ViteでReact+Tailwind+TSをサクッと構成する

# Repository

https://github.com/Efo-YU/vite-react-tailwind-ts-swc

# Motivation

- [Next.js](https://nextjs.org/)では[TypeScript](https://www.typescriptlang.org/)と[Tailwind CSS](https://tailwindcss.com/)(とベースたる[React](https://react.dev/))が標準的な構成として用いられる([`create-next-app`時に自動でsetupできる](https://nextjs.org/docs/app/getting-started/installation#automatic-installation))
- Next.jsはReactの代表的な _full-stack framework_ とされるため，Reactを用いる際は上記の構成を真似したい
- だがNext.js自体は超クソデカframeworkであるため，この構成を使うためだけにNext.jsを用いるのは無駄が多い
- [Vite](https://vite.dev/)なら簡単かつminimalにReact+Tailwind+TSを構成できる

<br>

# Procedure

## Initialize project

Commit: https://github.com/Efo-YU/vite-react-tailwind-ts-swc/commit/7d4de5eb7ac7561dc163684a4ccc556c874b6d94

下記を実行：
```bash
pnpm create vite
```
dialogで以下のように選択：
```bash
◇  Project name:
│  foo-bar-project  # 任意にキーボード入力，Enterで決定
│
◇  Select a framework:
│  React  # 十字キーで選択，Enterで決定
│
◇  Select a variant:
│  TypeScript + SWC  # 十字キーで選択，Enterで決定
│
```

_Note:_ [SWC](https://swc.rs/)はNext.jsでも用いられているとのこと．

## Add tailwindcss and @tailwindcss/vite dependencies

Commit: https://github.com/Efo-YU/vite-react-tailwind-ts-swc/commit/e9eda14599f8ef6cf8fd082c6611686abbebf1c0

```bash
pnpm i tailwindcss @tailwindcss/vite
```

## Configure Tailwind CSS

Commit: https://github.com/Efo-YU/vite-react-tailwind-ts-swc/commit/42633c835ac2f62520d83d1b2d50a5c5da79a237

- `src/App.css`を削除
- `src/index.css`を`@import "tailwindcss"`ただ一行だけにする
```css
@import "tailwindcss"
```
- `vite.config.ts`にtailwindcssを追加
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

## Edit `src/App.tsx`

前節までで構成は完了．ただし，`pnpm create vite`時に生成された`src/App.tsx`はTailwindを用いておらず，もはや使えなくなっているため，Tailwindを用いたものに変える必要がある．
```
create an App.tsx with Tailwind v4
```
とでもAIに投げて書いてもらおう．
