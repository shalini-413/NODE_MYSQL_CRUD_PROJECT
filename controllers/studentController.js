const db = require("../config/db");

// GET ALL STUDENTS LIST
const getStudents = async (req, res) => {
    try {
        const data = await db.query(' SELECT * FROM students')
        if (!data) {
            return res.status(404).send({
                success: false,
                message: "no record found",
                error
            })
        }
        res.status(200).send({
            success: true,
            message: "all students records",
            data: data[0],
        });
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Error in Get All Student API",
            error
        })
    }
}


// GET STUDENT BY ID
const getStudenByID = async (req, res) => {
    try {
        const studentId = req.params.id
        if (!studentId) {
            return res.status(404).send({
                success: false,
                message: "Invalid or provide student id"
            })
        }
        // const data = await db.query(`SELECT * FROM students WHERE id =`+studentID)
        const data = await db.query(`SELECT * FROM students WHERE id=?`, [studentId])

        if (!data) {
            return res.status(404).send({
                success: false,
                message: "no records found",
            })
        }
        res.status(200).send({
            success: true,
            studentDetails: data[0],
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "error in get student by API id",
            error
        })
    }
}


// CREATE STUDENT
const createStudent = async (req, res) => {
    try {
        const { name, roll_no, fees, medium } = req.body
        if (!name || !roll_no || !fees || !medium) {
            return res.status(500).send({
                success: false,
                message: "please provide all fields"
            })
        }

        const data = await db.query(`INSERT INTO students (name, roll_no, fees, medium) VALUES (?, ?, ?, ?)`, [name, roll_no, fees, medium])
        if(!data){
            return res.status(404).send({
                success:false,
                message: "error in insert query"
            })
        }

        res.status(201).send({
            success:true,
            message:"new student record created"
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "error in create student api",
            error
        })
    }
}

// UPDATE STUDENT
const updateStudent = async (req, res) => {
    try{
        const studentId = req.params.id
        if(!studentId){
            return res.status(404).send({
                success: false,
                message: "invalid id or provide id"
            })
        }

        const {name, roll_no, fees, medium} = req.body
        const data = await db.query(`UPDATE students SET name = ?, roll_no = ?, fees = ?, medium = ? WHERE id = ?`, [name, roll_no, fees, medium, studentId])
        if(!data){
            return res.status(500).send({
                success: false,
                message:"error in update data"
            })
        }
        res.status(200).send({
            success: true,
            message: "students details updated"
        })
    } catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            message: "error in update student API",
            error
        })
    }
}


// DELETE STUDENT
const deleteStudent = async (req, res) => {
    try{
        const studentId = req.params.id
        if(!studentId){
            return res.status(404).send({
                success: false,
                message: "please provide student id or valid student id"
            })
        }
        await db.query(`DELETE FROM students WHERE id=?`, [studentId])
        res.status(200).send({
            success: true,
            message: "student deleted successfully"
        })
    } catch(error){
        console.log(error)
        res.status(500).send({
            success: false,
            message: "error in delete student API",
            error
        })
    }

}

module.exports = { getStudents, getStudenByID, createStudent, updateStudent, deleteStudent };