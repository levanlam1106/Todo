import express from "express";
import cors from "cors"
import { customerRouter } from "./api/customer.router";
import { CustomerController } from "./api/customer.controller";
const customerCTL = new CustomerController();

const app = express();

app.use(express.json());
app.use(cors())
app.use("/api", customerRouter(customerCTL));
app.listen(5000, (err) => {
    if (err) console.log(err)

    else console.log("server listen on port 5000")
})

// app.get("/api/get/list", (req, res) => {
//     res.json(customers);
// });

// app.post("/api/post/create", (req, res) => {
//     const fullname = req.body.fullname;
//     const gender = req.body.gender;
//     const birthday = req.body.birthday;
//     const data = {
//         _id: idRandom,
//         fullname,
//         gender,
//         birthday,
//     };
//     if (fullname && gender && birthday) {
//         customers.push(data);
//         res.json(customers);
//     }
//     else {
//         res.json("mời bạn nhập đủ")
//     }
    
// });

// app.get("/api/get/delete", (req, res) => {
//     const id = req.query.id;
//     const index = customers.findIndex((el) => el._id === id);
//     if (index >= 0) {
//         res.json(customers.splice(index, 1));
//     } else {
//         res.json(`Not found people with id= ${id}`);
//     }
// });

// app.post("/api/post/update", (req, res) => {
//     const id = req.query.id;
//     let customer = customers.find((el) => el._id === id);
//     const fullname = req.body.fullname;
//     const gender = req.body.gender;
//     const birthday = req.body.birthday;
//     if (fullname) {
//         customer.full_name = fullname;
//     }
//     if (gender) {
//         customer.gender = gender;
//     }
//     if (birthday) {
//         customer.birthday = birthday;
//     }
//     res.json(customer);
// });
