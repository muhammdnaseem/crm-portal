const con = require("../db/dbCon");

const setInstallment = async (req, res) => {
    
    try {
        const { booking, officeamount, dealamount, discountamount, token, tokendate, downpaymentamount, remainingamount, installmentperiod, installmenttype, permonth, dated} = req.body;

        // Ensure required fields are present in the request
        if (!booking || !officeamount || !dealamount || !discountamount || !token || !tokendate || !downpaymentamount || !remainingamount || !installmentperiod || !installmenttype || !permonth || !dated ) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "users" table
       const sql = "INSERT INTO installments (booking_id, officeamount, dealamount, discountamount, token, tokendate, downpaymentamount, remainingamount, installmentperiod_id, installmenttype_id, permonth, dated) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        con.query(sql, [booking, officeamount, dealamount, discountamount, token, tokendate, downpaymentamount, remainingamount, installmentperiod, installmenttype, permonth, dated], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Category successfully saved to the database");
            res.status(200).json({ message: "Installtion successfully saved to the database" });
        });



    } catch (error) {
        console.error("Error in setProject function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateInstallment = async (req, res) => {
    
    try {
        const { id, booking, officeamount, dealamount, discountamount, token, tokendate, downpaymentamount, remainingamount, installmentperiod, installmenttype, permonth, dated } = req.body;

        // Ensure required fields are present in the request
        if (!id || !booking || !officeamount || !dealamount || !discountamount || !token || !tokendate || !downpaymentamount || !remainingamount || !installmentperiod || !installmenttype || !permonth || !dated) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Update project in the "projects" table
        const sql = "UPDATE installments SET booking_id = ?, officeamount = ?, dealamount = ?, discountamount = ?, token = ?, tokendate = ?, downpaymentamount = ?, remainingamount = ?, installmentperiod_id = ?, installmenttype_id = ?, permonth = ?, dated = ? WHERE id = ?";

        con.query(sql, [booking, officeamount, dealamount, discountamount, token, tokendate, downpaymentamount, remainingamount, installmentperiod, installmenttype, permonth, dated, id], (error, result) => {
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

const deleteInstallment = async (req, res) => {
    try {
        const { id } = req.body;

        // Ensure the id is provided
        if (!id) {
            return res.status(400).json({ error: "Missing project ID." });
        }

        // Delete project from the "projects" table
        const sql = "DELETE FROM installments WHERE id = ?";
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

const getInstallment = async (req, res) => {
    try {
        // Select data from the "blocks" table
        const sql = "SELECT * FROM installments";
        
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

module.exports = { setInstallment, getInstallment, updateInstallment, deleteInstallment };
