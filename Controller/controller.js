const getText = (req, res) => {
    res.send("Welcome to Home Page Abhishek")
}

const getAllData = (req, res) => {
    res.json([{
        id: 1,
        text: "My Name is Abhishek"
    }])
}

const createData = (Req,res)=>{
    res.send("Data is Created")
}
const updateData = (req, res) => {
    res.send("Data Is Updated")
}
const deleteData = (req, res) => {
    res.send("Data is deleted Successfully")
}

module.exports = {getText , createData , updateData , deleteData , getAllData}