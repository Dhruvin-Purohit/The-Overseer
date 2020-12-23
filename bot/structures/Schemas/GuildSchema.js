const mongoose = require('mongoose')
const GuildDB = require('../GuildDB')

const GuildSchema = new mongoose.Schema ({
    id: {
        type:String,
        required: true
    },
    prefix: {
        type: String,
        default: "+",
        required: true
    },
    msglog: {
        type: String,
        default: null
    },
    mmblog: {
        type: String,
        default: null
    },
    gldlog: {
        type: String,
        default: null
    },
    disabled: {
        type: Array,
        default: null
    }
})

module.exports = GuildDB.model("GuildModel", GuildSchema)