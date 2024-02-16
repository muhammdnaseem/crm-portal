const setUsers = async (req, res) => {
    res.status(200).json({msg: "Set Users called!!!"});
    console.log("hello");
}
const getUsers = async (req, res) => {
    res.status(200).json({msg: "Get Users called!!!"});
}

module.exports = {setUsers, getUsers};