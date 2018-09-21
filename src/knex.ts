import { Model } from 'objection';

var dotenv = require('dotenv').load();
var connection = require('knex')({
    client: process.env.DATABASE,
    version: process.env.DB_VERSION,
    connection: {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_NAME
    }
})

Model.knex(connection)
export default Model;