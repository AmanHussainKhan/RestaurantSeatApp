import dotenv from "dotenv";
import app from "./app.js";

// Load environment variables from .env file
dotenv.config();

const port = process.env.PORT || 3000;

app.listen(process.env.PORT, () => {
    console.log(`SERVER HAS STARTED AT PORT ${port}`);
});
