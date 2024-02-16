const con = require("../db/dbCon");

const setFeature = async (req, res) => {
    
    try {
        const { order, name, slug} = req.body;

        // Ensure required fields are present in the request
        if (!order || !name || !slug ) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "users" table
       const sql = "INSERT INTO features (feature_order, name, slug) VALUES (?, ?, ?)";
        con.query(sql, [order, name, slug], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Feature successfully saved to the database");
            res.status(200).json({ message: "Feature successfully saved to the database" });
        });



    } catch (error) {
        console.error("Error in setProject function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateFeature = async (req, res) => {
    
    try {
        const { id, order, name, slug } = req.body;

        // Ensure required fields are present in the request
        if (!id || !order || !name || !slug) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Update project in the "projects" table
        const sql = "UPDATE features SET feature_order = ?, name = ?, slug = ? WHERE id = ?";

        con.query(sql, [order, name, slug, id], (error, result) => {
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

const deleteFeature = async (req, res) => {
    try {
        const { id } = req.body;

        // Ensure the id is provided
        if (!id) {
            return res.status(400).json({ error: "Missing project ID." });
        }

        // Delete project from the "projects" table
        const sql = "DELETE FROM features WHERE id = ?";
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

const getFeature = async (req, res) => {
    try {
        // Select data from the "blocks" table
        const sql = "SELECT * FROM features";
        
        con.query(sql, (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Feature successfully retrieved from the database");
            res.status(200).json(result); // Sending the result (rows) as a JSON response
        });

    } catch (error) {
        console.error("Error in getCategory function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { setFeature, getFeature, updateFeature, deleteFeature };
