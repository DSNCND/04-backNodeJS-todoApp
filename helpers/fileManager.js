const fs = require('fs');

const name = './database/data.json';

const saveData = (data) =>
{
    fs.writeFileSync(name, JSON.stringify(data));
}

const getData = () =>
{
    if(!fs.existsSync(name))
    {
        return null;
    }

    return JSON.parse(fs.readFileSync(name, {encoding: 'utf8'}));

}

module.exports = 
{
    saveData,
    getData,
}

