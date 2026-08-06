const pool = require('./database');

const create = (description) => {

    const statement = "INSERT INTO todo (description) VALUES ($1) RETURNING *"
    const result = await pool.query(statement, description)
   
};

const get = () => {
    const statement = "SELECT * FROM todo"
    const result = await pool.query(statement)
};

const remove = (id) => {
    const statement = "DELETE FROM todo WHERE todo_id = $1"
    const result = await pool.query(statement, id);
};

module.exports = {
    create,
    get,
    remove
};