const express = require('express');
const sequelize = require('./util/database');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    next();
})

app.use('/tasks', require('./routes/tasks'));
app.use('/boards', require('./routes/boards'));

(async () => {
    try {
        await sequelize.sync(
            { force: false }
        );
        app.listen(process.env.EXTERNAL_PORT || 3001);
    } catch (error) {
        console.error(error);
    }
})();