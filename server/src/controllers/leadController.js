const con = require("../db/dbCon");

const setLead = async (req, res) => {
    try {
        const { project, name, email, phone, city, status, agent, temperature, source, description } = req.body;

        // Ensure required fields are present in the request
        if (!project, !name || !email || !phone || !city || !status || !agent || !temperature || !source || !description) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "agents" table
        const sql = "INSERT INTO leads (project_id, name, email, phone, city, status_id, agent_id, temperature_id, source_id, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        con.query(sql, [project, name, email, phone, city, status, agent, temperature, source, description], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Agent successfully saved to the database");
            res.status(200).json({ message: "Lead successfully saved to the database" });
        });

    } catch (error) {
        console.error("Error in setAgent function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const updateLead = async (req, res) => {
    
    try {
        const { id, project, name, email, phone, city, status, agent, temperature, source, description } = req.body;

        // Ensure required fields are present in the request
        if (!id || !project, !name || !email || !phone || !city || !status || !agent || !temperature || !source || !description) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Update project in the "projects" table
        const sql = "UPDATE leads SET project_id = ?, name = ?, email = ?, phone = ?, city = ?, status_id = ?, agent_id = ?, temperature_id = ?, source_id = ?, description = ? WHERE id = ?";

        con.query(sql, [project, name, email, phone, city, status, agent, temperature, source, description, id], (error, result) => {
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

const deleteLead = async (req, res) => {
    try {
        const { id } = req.body;

        // Ensure the id is provided
        if (!id) {
            return res.status(400).json({ error: "Missing project ID." });
        }

        // Delete project from the "projects" table
        const sql = "DELETE FROM leads WHERE id = ?";
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


const getLead = async (req, res) => {
    try {
        // Select data from the "blocks" table
        const sql = "SELECT * FROM leads";
        
        con.query(sql, (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Agents successfully retrieved from the database");
            res.status(200).json(result); // Sending the result (rows) as a JSON response
        });

    } catch (error) {
        console.error("Error in getAgent function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { setLead, getLead, updateLead, deleteLead };
