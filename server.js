const express = require("express");
const booksRouter = require("./routes/books");

const app = express();
const port = 9000;

app.use(express.json());
app.use("/books", booksRouter);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
