const con = require("../db/dbCon");

const setUser = async (req, res) => {
    try {
        const { name, email, password, defaultrole, additionalrole, locale, image } = req.body;

        // Ensure required fields are present in the request
        if (!name || !email || !password || !defaultrole || !additionalrole || !locale || !image ) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "agents" table
        const sql = "INSERT INTO user (name, email, password, default_role_id, additional_role_id, locale, image) VALUES (?, ?, ?, ?, ?, ?, ?)";
        con.query(sql, [name, email, password, defaultrole, additionalrole, locale, image], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Agent successfully saved to the database");
            res.status(200).json({ message: "User successfully saved to the database" });
        });

    } catch (error) {
        console.error("Error in setAgent function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const updateUser = async (req, res) => {
    
    try {
        const { id, name, email, password, defaultrole, additionalrole, locale, image } = req.body;

        // Ensure required fields are present in the request
        if (!id || !name || !email || !password || !defaultrole || !additionalrole || !locale || !image) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Update project in the "projects" table
        const sql = "UPDATE user SET name = ?, email = ?, password = ?, default_role_id = ?, additional_role_id = ?, locale = ?, image = ? WHERE id = ?";

        con.query(sql, [name, email, password, defaultrole, additionalrole, locale, image, id], (error, result) => {
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

const deleteUser = async (req, res) => {
    try {
        const { id } = req.body;

        // Ensure the id is provided
        if (!id) {
            return res.status(400).json({ error: "Missing project ID." });
        }

        // Delete project from the "projects" table
        const sql = "DELETE FROM user WHERE id = ?";
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


const getUser = async (req, res) => {
    try {
        // Select data from the "blocks" table
        const sql = "SELECT * FROM user";
        
        con.query(sql, (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("User successfully retrieved from the database");
            res.status(200).json(result); // Sending the result (rows) as a JSON response
        });

    } catch (error) {
        console.error("Error in getAgent function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { setUser, getUser, updateUser, deleteUser };
