const con = require("../db/dbCon");

const setNominee = async (req, res) => {
    try {
        const { name, husbandfathername, relationship, cnic, phone } = req.body;

        // Ensure required fields are present in the request
        if (!name || !husbandfathername || !relationship || !cnic || !phone ) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "agents" table
        const sql = "INSERT INTO nominees (name, husbandfathername, relationship, cnic, phone) VALUES (?, ?, ?, ?, ?)";
        con.query(sql, [name, husbandfathername, relationship, cnic, phone], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Agent successfully saved to the database");
            res.status(200).json({ message: "Nominee successfully saved to the database" });
        });

    } catch (error) {
        console.error("Error in setAgent function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};





const getNominee = async (req, res) => {
    try {
        // Select data from the "blocks" table
        const sql = "SELECT * FROM nominees";
        
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

module.exports = { setNominee, getNominee };
