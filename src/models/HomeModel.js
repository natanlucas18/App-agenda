const mongoose = require('mongoose');


const HomeSchema = new mongoose.Schema({
    Descricao: {type: String, required: true},
    HoraInicial:{type: String, required:true},
    HoraFinal: {type: String, required: true}
});

const HomeModel = mongoose.model('Atividade', HomeSchema);


class Home {
};


module.exports = HomeModel;