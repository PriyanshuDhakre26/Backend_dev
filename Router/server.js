import express from "express";
import useRoute from "./router/useRoute.js";
import registerRoute from "./router/registerRoute.js";

const port = 3000;
const app = express();
app.use("/api", useRoute);
app.use("/api", registerRoute);

// export default router

app.listen(port, () => {
  console.log("server is running on port " + port);
});
