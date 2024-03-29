const con = require("../db/dbCon");

const setMerge = async (req, res) => {
    
    try {

        const { customer, refnum, transferfee, agent, plot1, plot2, cniccopy} = req.body;

        // Ensure required fields are present in the request
        if (!customer || !refnum || !transferfee || !agent || !plot1 || !plot2 || !cniccopy ) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "users" table
       const sql = "INSERT INTO mergerequests (customer_id, reference_num, transfer_fee, agent_id, plot_first_id, plot_sec_id, cnic_copy) VALUES (?, ?, ?, ?, ?, ?, ?)";
        con.query(sql, [customer, refnum, transferfee, agent, plot1, plot2, cniccopy], (error, result) => {
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


const updateMerge = async (req, res) => {
    
    try {
        const { id, customer, refnum, transferfee, agent, plot1, plot2, cniccopy } = req.body;

        // Ensure required fields are present in the request
        if ( !id || !customer || !refnum || !transferfee || !agent || !plot1 || !plot2 || !cniccopy) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Update project in the "projects" table
        const sql = "UPDATE mergerequests SET customer_id = ?, reference_num = ?, transfer_fee = ?, agent_id = ?, plot_first_id = ?, plot_sec_id = ?, cnic_copy = ? WHERE id = ?";

        con.query(sql, [customer, refnum, transferfee, agent, plot1, plot2, cniccopy, id], (error, result) => {
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

const deleteMerge = async (req, res) => {
    try {
        const { id } = req.body;

        // Ensure the id is provided
        if (!id) {
            return res.status(400).json({ error: "Missing project ID." });
        }

        // Delete project from the "projects" table
        const sql = "DELETE FROM mergerequests WHERE id = ?";
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

const getMerge = async (req, res) => {
    try {
        // Select data from the "blocks" table
        const sql = "SELECT mergerequests.*, customers.customer_name AS customer, agents.name AS agent_name FROM mergerequests INNER JOIN customers ON mergerequests.customer_id = customers.id INNER JOIN agents ON mergerequests.agent_id = agents.id";
        
        
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

module.exports = { setMerge, getMerge, updateMerge, deleteMerge };
