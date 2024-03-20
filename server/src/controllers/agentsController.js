const con = require("../db/dbCon");

const setAgent = async (req, res) => {
    try {
        const { name, email, city, commission, address, dob, image, persontype, fathername, cnic, mobile, project, description } = req.body;

        // Ensure required fields are present in the request
        if (!name || !email || !city || !commission || !address || !dob || !image || !persontype || !fathername || !cnic || !mobile || !project || !description) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "agents" table
        const sql = "INSERT INTO agents (name, email, city, commission, address, dob, image, person_type, father_name, cnic, mobile, project_id, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        con.query(sql, [name, email, city, commission, address, dob, image, persontype, fathername, cnic, mobile, project, description], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Agent successfully saved to the database");
            res.status(200).json({ message: "Agent successfully saved to the database" });
        });

    } catch (error) {
        console.error("Error in setAgent function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const updateAgent = async (req, res) => {
    
    try {
        const { id, name, email, city, commission, address, dob, image, persontype, father } = req.body;

        // Ensure required fields are present in the request
        if (!id || !name || !email || !city || !commission || !address || !dob || !image || !persontype || !fathername ) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Update project in the "projects" table
        const sql = "UPDATE agents SET name = ?, email = ?, city = ?, commission = ?, address = ?, dob = ?, image = ?, person_type = ?, father_name = ? WHERE id = ?";

        con.query(sql, [name, email, city, commission, address, dob, image, persontype, fathername, cnic, mobile, project, description, id], (error, result) => {
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

const deleteAgent = async (req, res) => {
    try {
        const { id } = req.body;

        // Ensure the id is provided
        if (!id) {
            return res.status(400).json({ error: "Missing project ID." });
        }

        // Delete project from the "projects" table
        const sql = "DELETE FROM agents WHERE id = ?";
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



const getAgent = async (req, res) => {
    try {
        // Select data from the "blocks" table
        const sql = "SELECT * FROM agents";
        
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

module.exports = { setAgent, getAgent, updateAgent, deleteAgent };
