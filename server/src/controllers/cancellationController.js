const con = require("../db/dbCon");

const setCancellation = async (req, res) => {
    
    try {
        const { serialnum, customername, bookingref, reason, cancellationfee, cniccopy, downpaymentreceipt, allotmentcertificate, cancellationrequestletter} = req.body;

        // Ensure required fields are present in the request
        if (!order || !name || !fee || !slug ) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "users" table
       const sql = "INSERT INTO cancellations (serial_num, customer_id, booking_ref, reason_id, cancellation_fee, cnic_copy, downpaymentreceipt, allotmentcertificate, cancellation_req_letter) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
        con.query(sql, [order, name, fee, slug], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Fee successfully saved to the database");
            res.status(200).json({ message: "Cancellation Request successfully saved to the database" });
        });



    } catch (error) {
        console.error("Error in setProject function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};



const getCancellation = async (req, res) => {
    try {
        // Select data from the "blocks" table
        const sql = "SELECT * FROM cancellations";
        
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

module.exports = { setCancellation, getCancellation };
