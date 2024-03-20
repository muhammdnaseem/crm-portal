const con = require("../db/dbCon");




const setTransfer = async (req, res) => {
    
    try {
        const { filename, reference, serial, transferfee, balance, agent, transferer, transfaree, applicationform, bookingform, authorityholderphoto, transferfeecopy, validndc, validpaymentplan, surchargereport, correctsurchargereport, sellerdata, thumbimpression } = req.body;

        // Ensure required fields are present in the request
        if ( !filename || !reference || !serial || !transferfee || !balance || !agent || !transferer || !transfaree || !applicationform || !bookingform || !authorityholderphoto || !transferfeecopy || !validndc || !validpaymentplan || !surchargereport || !correctsurchargereport || !sellerdata || !thumbimpression) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "users" table
        const sqlTransfer = "INSERT INTO transfers (file_id, reference, serial, transferfee, balance, agent_id, transferer_id, transfaree_id, applicationform, bookingform, authorityholderphoto, transferfeecopy, validndc, validpaymentplan, surchargereport, correctsurchargereport, sellerdata, thumbimpression) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        con.query(sqlTransfer, [filename, reference, serial, transferfee, balance, agent, transferer, transfaree, applicationform, bookingform, authorityholderphoto, transferfeecopy, validndc, validpaymentplan, surchargereport, correctsurchargereport, sellerdata, thumbimpression], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Fee successfully saved to the database");
            res.status(200).json({ message: "Merge Request successfully saved to the database" });
        });

    

    } catch (error) {
        console.error("Error in setProject function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};



const updateTransfer = async (req, res) => {
    
    try {
        const { id, filename, reference, serial, transferfee, balance, agent, transferer, transfaree, applicationform, bookingform, authorityholderphoto, transferfeecopy, validndc, validpaymentplan, surchargereport, correctsurchargereport, sellerdata, thumbimpression } = req.body;

        // Ensure required fields are present in the request
        if ( !id || !filename || !reference || !serial || !transferfee || !balance || !agent || !transferer || !transfaree || !applicationform || !bookingform || !authorityholderphoto || !transferfeecopy || !validndc || !validpaymentplan || !surchargereport || !correctsurchargereport || !sellerdata || !thumbimpression) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Update project in the "projects" table
        const sql = "UPDATE transfers SET filename = ? reference = ? serial = ? transferfee = ? balance = ? agent = ? transferer = ? transfaree = ? applicationform = ? bookingform = ? authorityholderphoto = ? transferfeecopy = ? validndc = ? validpaymentplan = ? surchargereport = ? correctsurchargereport = ? sellerdata = ? thumbimpression = ? WHERE id = ?";

        con.query(sql, [filename, reference, serial, transferfee, balance, agent, transferer, transfaree, applicationform, bookingform, authorityholderphoto, transferfeecopy, validndc, validpaymentplan, surchargereport, correctsurchargereport, sellerdata, thumbimpression, id], (error, result) => {
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

const deleteTransfer = async (req, res) => {
    try {
        const { id } = req.body;

        // Ensure the id is provided
        if (!id) {
            return res.status(400).json({ error: "Missing project ID." });
        }

        // Delete project from the "projects" table
        const sql = "DELETE FROM transfers WHERE id = ?";
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

const getTransfer = async (req, res) => {
    try {
        // Select data from the "blocks" table
        const sql = "SELECT transfers.*, transfaree_cus.customer_name AS transfaree_name, transferer_cus.customer_name AS transferer_name, bookingforms.file_id AS file_num FROM transfers INNER JOIN customers AS transfaree_cus ON transfers.transfaree_id = transfaree_cus.id INNER JOIN customers AS transferer_cus ON transfers.transferer_id = transferer_cus.id INNER JOIN bookingforms ON transfers.file_id = bookingforms.id";
        

        
        
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


module.exports = { setTransfer, getTransfer, updateTransfer, deleteTransfer };
