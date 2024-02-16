const con = require("../db/dbCon");

const setFee = async (req, res) => {
    
    try {
        const { order, name, fee, slug} = req.body;

        // Ensure required fields are present in the request
        if (!order || !name || !fee || !slug ) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "users" table
       const sql = "INSERT INTO fee (fee_order, name, fee, slug) VALUES (?, ?, ?, ?)";
        con.query(sql, [order, name, fee, slug], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Fee successfully saved to the database");
            res.status(200).json({ message: "Fee successfully saved to the database" });
        });



    } catch (error) {
        console.error("Error in setProject function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateFee = async (req, res) => {
    
    try {
        const { id, order, name, fee, slug } = req.body;

        // Ensure required fields are present in the request
        if (!id || !order || !name || !fee || !slug) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Update project in the "projects" table
        const sql = "UPDATE fee SET fee_order = ?, name = ?, fee = ?, slug = ? WHERE id = ?";

        con.query(sql, [order, name, fee, slug, id], (error, result) => {
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

const deleteFee = async (req, res) => {
    try {
        const { id } = req.body;

        // Ensure the id is provided
        if (!id) {
            return res.status(400).json({ error: "Missing project ID." });
        }

        // Delete project from the "projects" table
        const sql = "DELETE FROM fee WHERE id = ?";
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

const getFee = async (req, res) => {
    try {
        // Select data from the "blocks" table
        const sql = "SELECT * FROM fee";
        
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

module.exports = { setFee, getFee, updateFee, deleteFee };
