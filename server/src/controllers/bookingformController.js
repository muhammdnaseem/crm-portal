const con = require("../db/dbCon");

const setBooking = async (req, res) => {
    try {
        const { file, reference, serial, customer, agent, commission, plotprice, commissionamount, financialmonth, financialyear, dated, paymenttype, downpayment, tokenpayment, ddorpayorder, cheque, cashreciept, bank, tenure, discount } = req.body;

        // Ensure required fields are present in the request
        if (!file || !reference || !serial || !customer || !agent || !commission || !plotprice || !commissionamount || !financialmonth || !financialyear || !dated || !paymenttype || !downpayment || !tokenpayment || !ddorpayorder || !cheque || !cashreciept || !bank || !tenure || !discount) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "agents" table
        const sql = "INSERT INTO bookingforms (file_id, reference, serial, customer_id, agent_id, commission, plotprice, commissionamount, financialmonth, financialyear, dated, paymenttype, downpayment, tokenpayment, payorder, cheque, cashreciept, bank_id, tenure_id, discount) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        con.query(sql, [file, reference, serial, customer, agent, commission, plotprice, commissionamount, financialmonth, financialyear, dated, paymenttype, downpayment, tokenpayment, ddorpayorder, cheque, cashreciept, bank, tenure, discount], (error, result) => {
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



const deleteBooking = async (req, res) => {
    try {
        const { id } = req.body;

        // Ensure the id is provided
        if (!id) {
            return res.status(400).json({ error: "Missing project ID." });
        }

        // Delete project from the "projects" table
        const sql = "DELETE FROM bookingforms WHERE id = ?";
        con.query(sql, [id], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Block successfully deleted from the database");
            res.status(200).json({ message: "Project successfully deleted from the database" });
        });

    } catch (error) {
        console.error("Error in deleteProject function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const updateBooking = async (req, res) => {
    
    try {
        const { id, file, reference, serial, customer, agent, commission, plotprice, commissionamount, financialmonth, financialyear, dated, paymenttype, downpayment, tokenpayment, ddorpayorder, cheque, cashreciept, bank, tenure, discount } = req.body;

        // Ensure required fields are present in the request
        if (!id || !file || !reference || !serial || !customer || !agent || !commission || !plotprice || !commissionamount || !financialmonth || !financialyear || !dated || !paymenttype || !downpayment || !tokenpayment || !ddorpayorder || !cheque || !cashreciept || !bank || !tenure || !discount) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Update project in the "projects" table
        const sql = "UPDATE blocks SET file_id = ?, reference = ?, serial = ?, customer_id = ?, agent_id = ?, commission = ?, plotprice = ?, commissionamount = ?, financialmonth = ?, financialyear = ?, dated = ?, paymenttype = ?, downpayment = ?, tokenpayment = ?, payorder = ?, cheque = ?, cashreciept = ?, bank_id = ?, tenure_id = ?, discount = ? WHERE id = ?";

        con.query(sql, [file, reference, serial, customer, agent, commission, plotprice, commissionamount, financialmonth, financialyear, dated, paymenttype, downpayment, tokenpayment, ddorpayorder, cheque, cashreciept, bank, tenure, discount, id], (error, result) => {
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

const getBooking = async (req, res) => {
    try {
        // Select data from the "blocks" table
        const sql = "SELECT bookingforms.*, customers.customer_name AS customer, agents.name AS agent_name FROM bookingforms INNER JOIN customers ON bookingforms.customer_id = customers.id INNER JOIN agents ON bookingforms.agent_id = agents.id";
        
        
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

module.exports = { setBooking, getBooking, updateBooking, deleteBooking };
