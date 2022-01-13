import express from "express";
import { randomID } from "../random";

const _id = randomID()

export function customerRouter(customerCTL) {
    const router = express.Router(); 
    
    router.get("/list", async (req,res) => {
        const id = req.query.id
        const docs = await customerCTL.listCustomer();
        res.json(docs);
    })
    
    router.get("/get", async (req,res) => {
        const id = req.query.id;
        const docs = await customerCTL.getOneCustomer(id)
        res.json(docs);
    })
    router.get("/delete", async (req, res) => {
        const id = req.query.id;
        const docs = await customerCTL.deleteCustomer(id);
        res.json(docs);
    })
    router.post("/create", async (req, res) => {
        let body = req.body
        body = {_id, ...body}
        let docs = await customerCTL.createCustomer(body)
       // docs.birthday = docs.birthday.toLocaleDateString("en-gb")
        res.json(docs)
    })
    router.post("/update", async (req,res) => {
        const id = req.query.id
        const body = req.body
        let docs = await customerCTL.updateCustomer(id, body)
        res.json(docs)
    })
    // router.get("/search", async (req, res) => {
    //     const 
    // })

    return router;
}