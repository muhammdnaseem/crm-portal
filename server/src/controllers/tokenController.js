const con = require("../db/dbCon");

const setToken = async (req, res) => {
    try {
        const { office, customer, totalamount, dealamount, discount, downpaymentamount, tokenamount, deduction, description, date } = req.body;

        // Ensure required fields are present in the request
        if (!office || !customer || !totalamount || !dealamount || !discount || !downpaymentamount || !tokenamount || !deduction || !description || !date ) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "agents" table
        const sql = "INSERT INTO token (office_id, customer_id, amount, deal_amount, discount, downpayment, tokenamount, deduction, description, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        con.query(sql, [office, customer, totalamount, dealamount, discount, downpaymentamount, tokenamount, deduction, description, date], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Agent successfully saved to the database");
            res.status(200).json({ message: "Token successfully saved to the database" });
        });

    } catch (error) {
        console.error("Error in setAgent function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const updateToken = async (req, res) => {
    
    try {
        const { id, office, customer, totalamount, dealamount, discount, downpaymentamount, tokenamount, deduction, description, date } = req.body;

        // Ensure required fields are present in the request
        if (!id || !office || !customer || !totalamount || !dealamount || !discount || !downpaymentamount || !tokenamount || !deduction || !description || !date) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Update project in the "projects" table
        const sql = "UPDATE token SET office_id = ?, customer_id = ?, amount = ?, deal_amount = ?, discount = ?, downpayment = ?, tokenamount = ?, deduction = ?, description = ?, date = ? WHERE id = ?";

        con.query(sql, [office, customer, totalamount, dealamount, discount, downpaymentamount, tokenamount, deduction, description, date, id], (error, result) => {
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

const deleteToken = async (req, res) => {
    try {
        const { id } = req.body;

        // Ensure the id is provided
        if (!id) {
            return res.status(400).json({ error: "Missing project ID." });
        }

        // Delete project from the "projects" table
        const sql = "DELETE FROM token WHERE id = ?";
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


const getToken = async (req, res) => {
    try {
        // Select data from the "blocks" table
        const sql = "SELECT * FROM token";
        
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

module.exports = { setToken, getToken, updateToken, deleteToken };
