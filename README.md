Youthfully Test
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```
Second, build production:
```bash
npm run build
# or
yarn build
```
Third, run production:
```bash
npm start
# or
yarn start
```

Open [http://192.168.xxx.xxx:3000](http://192.168.xxx.xxx:3000) with your browser to see the result.
Don't use `localhost` or `127.0.0.1`, must use IP4 address to make sure imgur API works.

## Techincal Stack Comment
- Used `Next.js` to make use of `SSR` and advantage of `Next.js`
- Used `emotion cache` to improve performance
- Used `MaterialUI` to facilitate development
- Used `Typescript` and `prettier-eslint` to write clean code

## Architectural Comment
Focused on architectural solution to improve scalability and performance
- First of all, defined `ThemeOption` with several options
- Defined Global `Styles`
- Built responsive `Layout` adding `Navbar` and `Content Area`
- Combinated `emotion` and `SSR`

## Future Improvements
Imgur API response per request is too much to list at once for clientside. So we can split response and add infinite scrolling pretending to sending request to Imgur frequently.

Or we can create our own backend to move fast.
Of course, it would be better to improve styling 😁
