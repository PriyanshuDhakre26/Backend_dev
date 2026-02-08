
import express from "express"
import methodOverride from 'method-override'
const app=express();
import route from "./Router/route.js"
import query from "./Router/query.js"
import blog from "./Router/blog.js"
app.set("view engine","ejs");
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride('_method'));
app.use("/page",route);
app.use("/api",query);
app.use("/api",blog);

app.listen(3000,(req,res)=>{
    console.log("server is running");
});

