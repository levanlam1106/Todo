import { ReadFile, WriteFile } from "../lib/fs-module";

const customerFile = "customer.json";

export class CustomerController {
    constructor() {}

    async listCustomer() {
        const docs = await ReadFile(customerFile);
        return docs;
    }
    async getOneCustomer(id) {
        const customer = await ReadFile(customerFile);
        const docs = customer.find((el) => el._id == id);
        if (docs) {
            return docs;
        } else {
            return `không tìm thấy người có id = ${id}`;
        }
    }
    async deleteCustomer(id) {
        let customer = await ReadFile(customerFile);
        const index = customer.findIndex((el) => el._id == id);
        if (index > -1) {
            customer.splice(index, 1);
            await WriteFile(customerFile, customer);
            return customer;
        } else {
            return `không tìm thấy người có id = ${id} để xóa`;
        }
    }
    async createCustomer(docs) {
        let customer = await ReadFile(customerFile);
        customer.push(docs);
        await WriteFile(customerFile, customer);
        return customer;
    }
    async updateCustomer(id, body) {
        let customer = await ReadFile(customerFile);
        let docs = customer.find((el) => el._id == id);
        if (docs) {
            if (body.full_name) {
                docs.full_name = body.full_name;
            }
            if (body.gender) {
                docs.gender = body.gender;
            }
            if (body.birthday) {
                docs.birthday = body.birthday;
            }
            // customer.push(docs);
            await WriteFile(customerFile, customer);
            return customer;
        } else {
            return `không tìm thấy người có id = ${id}`;
        }
    }
}
