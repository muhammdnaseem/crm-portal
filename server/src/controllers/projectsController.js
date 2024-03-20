const con = require("../db/dbCon");

const setProject = async (req, res) => {
    
    try {
        const { projectname, description, totamarla, block, agent } = req.body;

        // Ensure required fields are present in the request
        if (!projectname || !description || !totamarla || !block) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "users" table
       const sql = "INSERT INTO projects (projectname, description, totalmarla, block_id, agent_id) VALUES (?, ?, ?, ?, ?)";
        con.query(sql, [projectname, description, totamarla, block, agent], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Project successfully saved to the database");
            res.status(200).json({ message: "Project successfully saved to the database" });
        });



    } catch (error) {
        console.error("Error in setProject function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateProject = async (req, res) => {
    
    try {
        const { id, projectname, description, totalmarla, blocks, agents } = req.body;

        // Ensure required fields are present in the request
        if (!id || !projectname || !description || !totalmarla || !blocks || !agents) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Update project in the "projects" table
        const sql = "UPDATE projects SET projectname = ?, description = ?, totalmarla = ?, block_id = ?, agent_id = ? WHERE id = ?";

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

const deleteProject = async (req, res) => {
    try {
        const { id } = req.body;

        // Ensure the id is provided
        if (!id) {
            return res.status(400).json({ error: "Missing project ID." });
        }

        // Delete project from the "projects" table
        const sql = "DELETE FROM projects WHERE id = ?";
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




const getProject = async (req, res) => {
    try {
        // Join query to retrieve project details along with agent name
        const sql = "SELECT projects.*, agents.name AS agent_name, blocks.blockname AS block_name FROM projects INNER JOIN agents ON projects.agent_id = agents.id INNER JOIN blocks ON projects.block_id = blocks.id";
        
        con.query(sql, (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Projects successfully retrieved from the database with agent names");
            res.status(200).json(result); // Sending the result (rows) as a JSON response
        });

    } catch (error) {
        console.error("Error in getProject function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


module.exports = { setProject, getProject, updateProject, deleteProject };
