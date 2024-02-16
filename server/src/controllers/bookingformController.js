const con = require("../db/dbCon");

const setBooking = async (req, res) => {
    try {
        const { file, reference, serial, customer, agent, commission, plotprice, commissionamount, nominee, financialmonth, financialyear, dated, paymenttype, downpayment, tokenpayment, payorder, cheque, cashreciept, bank, tenure, discount } = req.body;

        // Ensure required fields are present in the request
        if (!file, !reference || !serial || !customer || !agent || !commission || !plotprice || !commissionamount || !nominee || !financialmonth || !financialyear || !dated || !paymenttype || !downpayment || !tokenpayment || !payorder || !cheque || !cashreciept || !bank || !tenure || !discount) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "agents" table
        const sql = "INSERT INTO bookingforms (file_id, reference, serial, customer, agent, commission, plotprice, commissionamount, nominee, financialmonth, financialyear, dated, paymenttype, downpayment, tokenpayment, payorder, cheque, cashreciept, bank, tenure, discount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        con.query(sql, [file, reference, serial, customer, agent, commission, plotprice, commissionamount, nominee, financialmonth, financialyear, dated, paymenttype, downpayment, tokenpayment, payorder, cheque, cashreciept, bank, tenure, discount], (error, result) => {
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





const getBooking = async (req, res) => {
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

module.exports = { setBooking, getBooking };
