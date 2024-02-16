const con = require("../db/dbCon");

// const setTransfererDocuments = async (req, res) => {
    
//     try {
//         const { applicationform, bookingform, authorityholderphoto, transferfeecopy, validndc, validpaymentplan, matcheswithinstallment, surchargereport, sellerdata, thumbimpression} = req.body;

//         // Ensure required fields are present in the request
//         if ( !applicationform || !bookingform || !authorityholderphoto || !transferfeecopy || !validndc || !validpaymentplan || !matcheswithinstallment || !surchargereport || !sellerdata || !thumbimpression ) {
//             return res.status(400).json({ error: "Missing required fields." });
//         }

//         // Insert user into the "users" table
//        const sql = "INSERT INTO transferdocument (applicationform, bookingform, authorityholderphoto, transferfeecopy, validndc, validpaymentplan, matcheswithinstallment, surchargereport, sellerdata, thumbimpression) VALUES (?, ?)";
//         con.query(sql, [applicationform, bookingform, authorityholderphoto, transferfeecopy, validndc, validpaymentplan, matcheswithinstallment, surchargereport, sellerdata, thumbimpression], (error, result) => {
//             if (error) {
//                 console.error("Error executing SQL query:", error);
//                 return res.status(500).json({ error: "Internal Server Error", details: error.message });
//             }

//             console.log("Category successfully saved to the database");
//             res.status(200).json({ message: "Transfer successfully saved to the database" });
//         });



//     } catch (error) {
//         console.error("Error in setProject function:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };


// const setTransfereeDocuments = async (req, res) => {
    
//     try {
//         const { transfereeapplication, transfereebooking, transfereeahp, transfereetfc, transfereevalidndc, transfereevpp, transfereemwi, transfereesr, transfereesellerdata, transfereethumbimpression} = req.body;

//         // Ensure required fields are present in the request
//         if ( !transfereeapplication || !transfereebooking || !transfereeahp || !transfereetfc || !transfereevalidndc || !transfereevpp || !transfereemwi || !transfereesr || !transfereesellerdata || !transfereethumbimpression ) {
//             return res.status(400).json({ error: "Missing required fields." });
//         }

//         // Insert user into the "users" table
//        const sql = "INSERT INTO transferdocument (applicationform, bookingform, authorityholderphoto, transferfeecopy, validndc, validpaymentplan, matcheswithinstallment, surchargereport, sellerdata, thumbimpression) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
//         con.query(sql, [transfereeapplication, transfereebooking, transfereeahp, transfereetfc, transfereevalidndc, transfereevpp, transfereemwi, transfereesr, transfereesellerdata, transfereethumbimpression], (error, result) => {
//             if (error) {
//                 console.error("Error executing SQL query:", error);
//                 return res.status(500).json({ error: "Internal Server Error", details: error.message });
//             }

//             console.log("Category successfully saved to the database");
//             res.status(200).json({ message: "Transferee successfully saved to the database" });
//         });



//     } catch (error) {
//         console.error("Error in setProject function:", error);
//         res.status(500).json({ error: "Internal Server Error" });
//     }
// };




const setTransfer = async (req, res) => {
    
    try {
        const { applicationform, bookingform, authorityholderphoto, transferfeecopy, validndc, validpaymentplan, surchargereport, correctsurchargereport, sellerdata, thumbimpression } = req.body;

        // Ensure required fields are present in the request
        if (!applicationform || !bookingform || !authorityholderphoto || !transferfeecopy || !validndc || !validpaymentplan || !matcheswithinstallment || !surchargereport || !sellerdata || !thumbimpression) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "users" table
        const sqlDocument = "INSERT INTO transferdocument (applicationform, bookingform, authorityholderphoto, transferfeecopy, validndc, validpaymentplan, matcheswithinstallment, surchargereport, sellerdata, thumbimpression) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        con.query(sqlDocument, [applicationform, bookingform, authorityholderphoto, transferfeecopy, validndc, validpaymentplan, matcheswithinstallment, surchargereport, sellerdata, thumbimpression], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Document successfully saved to the database");
            res.status(200).json({ message: "Transfer document successfully saved to the database" });
        });

        const { filename, reference, serial, transferfee, balance, agent, transferer, transfaree, nominee, documents_id } = req.body;

        // Ensure required fields are present in the request
        if (!filename || !reference || !serial || !transferfee || !balance || !agent || !transferer || !transfaree || !nominee || !documents_id) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Insert user into the "users" table
        const sqlTransfer = "INSERT INTO transfers (file_id, reference, serial, transferfee, balance, agent_id, transferer_id, transfaree_id, nominee_id, documents_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
        con.query(sqlTransfer, [filename, reference, serial, transferfee, balance, agent, transferer, transfaree, nominee, documents_id], (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Transfer successfully saved to the database");
            res.status(200).json({ message: "Transfer successfully saved to the database" });
        });

    } catch (error) {
        console.error("Error in setTransfer function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


const updateTransfer = async (req, res) => {
    
    try {
        const { id, projectname, description, totalmarla, blocks, agents } = req.body;

        // Ensure required fields are present in the request
        if (!id || !projectname || !description || !totalmarla || !blocks || !agents) {
            return res.status(400).json({ error: "Missing required fields." });
        }

        // Update project in the "projects" table
        const sql = "UPDATE projects SET projectname = ?, description = ?, totalmarla = ?, block_id = ?, agent_id = ? WHERE id = ?";

        con.query(sql, [projectname, description, totalmarla, blocks, agents, id], (error, result) => {
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
        const sql = "DELETE FROM projects WHERE id = ?";
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
        const sql = "SELECT * FROM transfers";
        
        con.query(sql, (error, result) => {
            if (error) {
                console.error("Error executing SQL query:", error);
                return res.status(500).json({ error: "Internal Server Error", details: error.message });
            }

            console.log("Role successfully retrieved from the database");
            res.status(200).json(result); // Sending the result (rows) as a JSON response
        });

    } catch (error) {
        console.error("Error in getCategory function:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { setTransfer, getTransfer };
