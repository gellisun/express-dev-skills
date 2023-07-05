const skills = [
    {id: 3939, name: 'Communication'},
    {id: 5858, name: 'Teamwork'},
    {id: 7878, name: 'Critical thinking'},
    {id: 1212, name: 'JavaScript'},
    {id: 3232, name: 'CSS'},
    {id: 4444, name: 'Problem solving'},
    {id: 9494, name: 'Time management'}
];

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}