import axios from "axios"
import * as chai from "chai"
import chaiJsonSchemaAjv from "chai-json-schema-ajv"
import Ajv from "ajv";
import addFormats from "ajv-formats";

import {schemaPost, schemaGet, schemaPut, schemaDelete} from  "../schemas/schema.js"

// Setup AJV with formats
const ajv = new Ajv();
addFormats(ajv);

chai.use(chaiJsonSchemaAjv.create({ajv}))

const { expect } = chai




const myInstance = axios.create({
    baseURL : 'https://dummyjson.com'
})    

describe("DUMMY JSON API TESTING", function(){
    it("Dummy JSON Post API Testing", async function(){
        // Post
        const credential = {
            username: "emilys",
            password: "emilyspass"
        }
        const response = await myInstance.post("/auth/login", credential)
            const token = response.data.token
            myInstance.defaults.headers.Authorization = `Bearer ${token}`
          
        //console.log(response.data)    
        //console.log(myInstance.defaults.headers.Authorization)    
        expect(response.data).to.be.jsonSchema(schemaPost)
        
    })


    it("Dummy JSON Get API Testing", async function(){
        // Get
        const response = await myInstance.get("/user/me")
    
        expect(response.data).to.be.jsonSchema(schemaGet)
        
    })


    it("Dummy JSON Put API Testing", async function(){
        // Put
        const response = await myInstance.put("/users/2", {
            firstName : "Iqbal"
            })
    
        expect(response.data).to.be.jsonSchema(schemaPut)
        
    })


    it("Dummy JSON Delete API Testing", async function(){
        // Delete
        const response = await myInstance.delete("/users/2")
    
        expect(response.data).to.be.jsonSchema(schemaDelete)
        
    })
})



