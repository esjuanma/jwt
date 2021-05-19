const users = [{
    name: 'John Galt'
}]

const get = (req, res) => {
    res.json(users)
};

const add = (req, res) => {
    const {
        user
    } = req.body;
    users.push(user);
    res.json(users);
};

module.exports = {
    get,
    add
};