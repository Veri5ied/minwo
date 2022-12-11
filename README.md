# MINWO TEST

## Technologies used

- React (Vite).
- SCSS (for styling).
- React Testing Library + Vitest (Vitest was used because vite does not support React Testing Library under the hood, so to set it up you need vitest and a custom vite configurations along side react testing library).
- Axios for api calls
- Context API (as part of requirements needed)

## Test

yarn run test

## Note

- Some test may fail
- A localized filter was implemented using the categories gotten from the product response because I don't want to assume categories each product belong to. So all categories returned from the response are not statically coded as they can change depending on the product fetched.
- In-browser tests and accessibility checks were carried out.
