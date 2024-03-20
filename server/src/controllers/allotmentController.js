const con = require("../db/dbCon");

const setAllotment = async (req, res) => {
    
    try {
        const { project, block, fileno, size, status, filefeature} = req.body;

        // Ensure required fields are present in the request
        if ( !project || !block || !fileno || !size || !status || !filefeature ) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "users" table
       const sql = "INSERT INTO allotments (project_id, block_id, file_no, size_id, status_id, file_feature) VALUES (?, ?, ?, ?, ?, ?)";
        con.query(sql, [project, block, fileno, size, status, filefeature], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Category successfully saved to the database");
            res.status(200).json({ message: "Role successfully saved to the database" });
        });



    } catch (error) {
        console.error("Error in setProject function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const updateAllotment = async (req, res) => {
    
    try {
        const { id, project, block, fileno, size, status, filefeature } = req.body;

        // Ensure required fields are present in the request
        if (!id || !project || !block || !fileno || !size || !status || !filefeature ) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Update project in the "projects" table
        const sql = "UPDATE allotments SET project_id = ?, block_id = ?, file_no = ?, size_id = ?, status_id = ?, file_feature = ? WHERE id = ?";

        con.query(sql, [project, block, fileno, size, status, filefeature, id], (error, result) => {
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

const deleteAllotment = async (req, res) => {
    try {
        const { id } = req.body;

        // Ensure the id is provided
        if (!id) {
            return res.status(400).json({ error: "Missing project ID." });
        }

        // Delete project from the "projects" table
        const sql = "DELETE FROM allotments WHERE id = ?";
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


const getAllotment = async (req, res) => {
    try {
        // Select data from the "blocks" table
        const sql = "SELECT allotments.*, projects.projectname AS project_name, blocks.blockname AS block_name, bookingforms.file_id AS file_num FROM allotments INNER JOIN projects ON allotments.project_id = projects.id INNER JOIN blocks ON allotments.block_id = blocks.id INNER JOIN bookingforms ON allotments.file_no = bookingforms.id";
        
        
        con.query(sql, (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Role successfully retrieved from the database");
            res.status(200).json(result); // Sending the result (rows) as a JSON response
        });

    } catch (error) {
        console.error("Error in getCategory function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { setAllotment, getAllotment, updateAllotment, deleteAllotment };
