This is a Payload CMS Demo for showing local api update error.

# Steps

1. Setup MongoDB
2. npm i
3. npm run dev
4. Open http://localhost:3000/admin
5. Create a new user
6. Create a new `foo` collection
7. Copy the `foo` collection id
8. Put the id in `./src/collections/Foo.ts` line 4
9. Save the file
10. Call api shown in `./src/collections/Foo.http`
11. check the data. `localized` inside `arr` is not updated.
