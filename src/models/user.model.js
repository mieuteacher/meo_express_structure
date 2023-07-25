let users = [
    {
        id: 1,
        name: "Phước",
        age: 24
    },
    {
        id: 2,
        name: "Trung Tre",
        age: 30
    }
]


module.exports = {
    getUsers: function() {
        return {
            status: true,
            message: "Get users successfully",
            data: users
        }
    }
}