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
    getOne,
    create,
    deleteOne,
    update
};

function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 10000;
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}