const con = require("../db/dbCon");

const setInstallmentType = async (req, res) => {
 
    try {
        const { addinstallment, value, balloonpayment} = req.body;

        // Ensure required fields are present in the request
        if (!addinstallment || !value || !balloonpayment ) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "users" table
       const sql = "INSERT INTO installmenttype (installment, value, balloon_payment) VALUES (?, ?, ?)";
        con.query(sql, [addinstallment, value, balloonpayment], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Fee successfully saved to the database");
            res.status(200).json({ message: "Installment Type Request successfully saved to the database" });
        });



    } catch (error) {
        console.error("Error in setProject function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateInstallmentType = async (req, res) => {
    
    try {
        const { id, projectname, description, totalmarla, blocks, agents } = req.body;

        // Ensure required fields are present in the request
        if (!id || !projectname || !description || !totalmarla || !blocks || !agents) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Update project in the "projects" table
        const sql = "UPDATE installmenttype SET installment = ?, value = ?, balloon_payment = ? WHERE id = ?";

        con.query(sql, [projectname, description, totalmarla, blocks, agents, id], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Project successfully updated in the database");
            res.status(200).json({ message: "Project successfully updated in the database" });
        });

    } catch (error) {
        console.error("Error in updateProject function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const deleteInstallmentType = async (req, res) => {
    try {
        const { id } = req.body;

        // Ensure the id is provided
        if (!id) {
            return res.status(400).json({ error: "Missing project ID." });
        }

        // Delete project from the "projects" table
        const sql = "DELETE FROM installmenttype WHERE id = ?";
        con.query(sql, [id], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Project successfully deleted from the database");
            res.status(200).json({ message: "Project successfully deleted from the database" });
        });

    } catch (error) {
        console.error("Error in deleteProject function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getInstallmentType = async (req, res) => {
    try {
        // Select data from the "blocks" table
        const sql = "SELECT * FROM mergerequests";
        
        con.query(sql, (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Category successfully retrieved from the database");
            res.status(200).json(result); // Sending the result (rows) as a JSON response
        });

    } catch (error) {
        console.error("Error in getCategory function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { setInstallmentType, getInstallmentType, updateInstallmentType, deleteInstallmentType };
