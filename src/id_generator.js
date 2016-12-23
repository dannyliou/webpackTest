var ID = 0;
function get() {
    return '_id_' + (++ID);
}
module.exports = {
    get:get
}