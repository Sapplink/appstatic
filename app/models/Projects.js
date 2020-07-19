const mongoose = require('mongoose');

const ProjectsSchema = mongoose.Schema({
    cardTitle: String,
    cardImg: String,
    cardTags: String,
    cardContents: String
});

module.exports = mongoose.model('Projects', ProjectsSchema);