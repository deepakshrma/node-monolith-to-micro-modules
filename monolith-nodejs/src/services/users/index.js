const http = require('../../core/http')

exports.getUsers = ( ) => {
    return http.get('/users')
}
exports.getUsersById = (id) => {
    return http.get(`/users/${id}`)
}
