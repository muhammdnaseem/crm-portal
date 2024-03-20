const con = require("../db/dbCon");

const setInventory = async (req, res) => {
    
    try {
        const { project, block, fileno, price, size, type, status} = req.body;

        // Ensure required fields are present in the request
        if (!project || !block || !fileno || !price || !size || !type || !status ) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "users" table
       const sql = "INSERT INTO inventory (project_id, block_id, file_no, price, size_id, type_id, status_id) VALUES (?, ?, ?, ?, ?, ?, ?)";
        con.query(sql, [project, block, fileno, price, size, type, status], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Category successfully saved to the database");
            res.status(200).json({ message: "Inventory successfully saved to the database" });
        });



    } catch (error) {
        console.error("Error in setProject function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateInventory = async (req, res) => {
    
    try {
        const { id, project, block, fileno, price, size, type, status } = req.body;

        // Ensure required fields are present in the request
        if (!id || !project || !block || !fileno || !price || !size || !type || !status) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Update project in the "projects" table
        const sql = "UPDATE inventory SET project_id = ?, block_id = ?, file_no = ?, price = ?, size_id = ?, type_id = ?, status_id = ? WHERE id = ?";

        con.query(sql, [project, block, fileno, price, size, type, status, id], (error, result) => {
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

const deleteInventory = async (req, res) => {
    try {
        const { id } = req.body;

        // Ensure the id is provided
        if (!id) {
            return res.status(400).json({ error: "Missing project ID." });
        }

        // Delete project from the "projects" table
        const sql = "DELETE FROM inventory WHERE id = ?";
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

const getInventory = async (req, res) => {
    try {
        // Select data from the "blocks" table
        const sql = "SELECT inventory.*, projects.projectname AS project_name, blocks.blockname AS block_name, bookingforms.file_id AS file_num, size.size AS size_name, type.type AS type_name, status.status AS status_name FROM inventory INNER JOIN projects ON inventory.project_id = projects.id INNER JOIN blocks ON inventory.block_id = blocks.id INNER JOIN bookingforms ON inventory.file_no = bookingforms.id INNER JOIN size ON inventory.size_id = size.id INNER JOIN type ON inventory.type_id = type.id INNER JOIN status ON inventory.status_id = status.id";
        
        
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

module.exports = { setInventory, getInventory, updateInventory, deleteInventory };
