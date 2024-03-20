const con = require("../db/dbCon");

const setBlock = async (req, res) => {
    
    try {
        const { blockname, project, totamarla, description} = req.body;

        // Ensure required fields are present in the request
        if (!blockname || !project || !totamarla || !description ) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "users" table
       const sql = "INSERT INTO blocks (blockname, project_id, totalmarla, description) VALUES (?, ?, ?, ?)";
        con.query(sql, [blockname, project, totamarla, description], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Block successfully saved to the database");
            res.status(200).json({ message: "Block successfully saved to the database" });
        });



    } catch (error) {
        console.error("Error in setProject function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const updateBlock = async (req, res) => {
    
    try {
        const { id, blockname, projectname, totamarla, description } = req.body;

        // Ensure required fields are present in the request
        if (!id || !blockname || !project || !totamarla || !description) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Update project in the "projects" table
        const sql = "UPDATE blocks SET blockname = ?, project_id = ?, totalmarla = ?, description = ? WHERE id = ?";

        con.query(sql, [blockname, project, totamarla, description, id], (error, result) => {
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

const deleteBlock = async (req, res) => {
    try {
        const { id } = req.body;

        // Ensure the id is provided
        if (!id) {
            return res.status(400).json({ error: "Missing project ID." });
        }

        // Delete project from the "projects" table
        const sql = "DELETE FROM blocks WHERE id = ?";
        con.query(sql, [id], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Block successfully deleted from the database");
            res.status(200).json({ message: "Project successfully deleted from the database" });
        });

    } catch (error) {
        console.error("Error in deleteProject function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const getBlock = async (req, res) => {
    try {
        // Select data from the "blocks" table
        const sql = "SELECT blocks.*, projects.projectname AS project_name FROM blocks INNER JOIN projects ON blocks.project_id = projects.id";
        // SELECT blocks.*, projects.projectname AS project_name FROM blocks INNER JOIN projects ON blocks.project_id = projects.id
       
        
        con.query(sql, (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Blocks successfully retrieved from the database with agent names");
            res.status(200).json(result); // Sending the result (rows) as a JSON response
        });

    } catch (error) {
        console.error("Error in getProject function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


module.exports = { setBlock, getBlock, updateBlock, deleteBlock };
