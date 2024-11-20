const express = require('express')
const { getText, createData, updateData, deleteData, getAllData } = require('../Controller/controller')

const router = express.Router()
router.get('/api',getText)

router.get('/allData' , getAllData)
router.post('/create', createData)
router.put('/update', updateData)

router.delete('/delete' ,deleteData)

module.exports = router