import React, { createContext, useContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [projectData, setProjectData] = useState([]);
  const [projectsTableData, setProjectsTableData] = useState([]);

  const [blockData, setBlockData] = useState([]);
  const [blocksTableData, setBlocksTableData] = useState([]);

  const [categoriesData, setCategoriesData] = useState([]);
  const [categoriesTableData, setCategoriesTableData] = useState([]);

  const [featuresData, setFeaturesData] = useState([]);
  const [featuresTableData, setFeaturesTableData] = useState([]);

  const [feeData, setFeeData] = useState([]);
  const [feeTableData, setFeeTableData] = useState([]);

  const [agentsData, setAgentsData] = useState([]);
  const [agentsTableData, setAgentsTableData] = useState([]);

  const [usersData, setUsersData] = useState([]);
  const [usersTableData, setUsersTableData] = useState([]);

  const [inventoryData, setInventoryData] = useState([]);
  const [inventoryTableData, setInventoryTableData] = useState([]);

  const [commissionData, setCommissionData] = useState([]);
  const [commissionTableData, setCommissionTableData] = useState([]);

  const [roleData, setRoleData] = useState([]);
  const [roleTableData, setRoleTableData] = useState([]);

  const [userData, setUserData] = useState([]);
  const [userTableData, setUserTableData] = useState([]);

  const [leadData, setLeadData] = useState([]);
  const [leadTableData, setLeadTableData] = useState([]);

  const [tokenData, setTokenData] = useState([]);
  const [tokenTableData, setTokenTableData] = useState([]);

  const [installmentData, setInstallmentData] = useState([]);
  const [installmentTableData, setInstallmentTableData] = useState([]);

  const [installmentperiodData, setInstallmentperiodData] = useState([]);
  const [installmentperiodTableData, setInstallmentperiodTableData] = useState([]);

  const [installmenttypeData, setInstallmenttypeData] = useState([]);
  const [installmenttypeTableData, setInstallmenttypeTableData] = useState([]);

  const [allotmentData, setAllotmentData] = useState([]);
  const [allotmentTableData, setAllotmentTableData] = useState([]);

  const [mergeRequestData, setMergeRequestData] = useState([]);
  const [mergeRequestTableData, setMergeRequestTableData] = useState([]);

  const [bookingData, setBookingData] = useState([]);
  const [bookingTableData, setBookingTableData] = useState([]);

  const [cancellationData, setCancellationData] = useState([]);
  const [cancellationTableData, setCancellationTableData] = useState([]);

  const [discountData, setDiscountData] = useState([]);
  const [discountTableData, setDiscountTableData] = useState([]);

  const [saleData, setSaleData] = useState([]);
  const [saleTableData, setSaleTableData] = useState([]);

  const [transferData, setTransferData] = useState([]);
  const [transferTableData, setTransferTableData] = useState([]);


  const [customerData, setCustomerData] = useState([]);
  const [customerTableData, setCustomerTableData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getprojects`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateProjectData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateProjectData = (newData) => {
    setProjectData(newData);
    const updatedTableData = newData.map((project) => ({
      Id: project.id,  // Replace with your actual ID property
      ProjectName: project.projectname,
      Description: project.description,
      TotalMarla: project.totalmarla,
      CreatedAt: project.createdAt,
      Blocks: project.block_name,
      Agents: project.agent_name,
    }));
    setProjectsTableData(updatedTableData);
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getblocks`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateBlockData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateBlockData = (newData) => {
    setBlockData(newData);
    const updatedTableData = newData.map((block) => ({
      Id: block.id,  // Replace with your actual ID property
      BlockName: block.blockname,
      ProjectName: block.project_id,
      TotalMarla: block.totalmarla,
      Description: block.description,

    }));
    setBlocksTableData(updatedTableData);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getagents`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateAgentsData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateAgentsData = (newData) => {
    setAgentsData(newData);
    const updatedTableData = newData.map((agent) => ({
      Id: agent.id,  // Replace with your actual ID property
      Name: agent.name,
      Email: agent.email,
      City: agent.city,
      Commission: agent.commission,
      Address: agent.address,
      DOB: agent.dob,
      Image: agent.image,
      PersonType: agent.person_type,
      Father: agent.father_name,


    }));
    setAgentsTableData(updatedTableData);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getusers`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateUsersData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateUsersData = (newData) => {
    setUsersData(newData);
    const updatedTableData = newData.map((user) => ({
      Id: user.id,  // Replace with your actual ID property
      Name: user.name,
      Email: user.email,
      DefaultRole: user.default_role_name,
      AdditionalRole: user.additional_role_name,
      Locale: user.locale,
      Image: user.image,


    }));
    setUsersTableData(updatedTableData);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getcategories`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateCategoriesData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateCategoriesData = (newData) => {
    setCategoriesData(newData);
    const updatedTableData = newData.map((category) => ({
      Id: category.id,
      Name: category.name,
      Slug: category.slug,
    }));
    setCategoriesTableData(updatedTableData);
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getfeatures`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateFeaturesData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);


  const updateFeaturesData = (newData) => {
    setFeaturesData(newData);
    const updatedTableData = newData.map((feature) => ({
      Id: feature.id,  // Replace with your actual ID property
      Order: feature.feature_order,
      Name: feature.name,
      Slug: feature.slug,

    }));
    setFeaturesTableData(updatedTableData);
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getinventory`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateInventoryData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateInventoryData = (newData) => {
    setInventoryData(newData);
    const updatedTableData = newData.map((inventory) => ({
      Id: inventory.id,  // Replace with your actual ID property
      Project: inventory.project_name,
      Block: inventory.block_name,
      FileNo: inventory.file_num,
      Price: inventory.price,
      Size: inventory.size_name,
      Type: inventory.type_name,
      Status: inventory.status_name,

    }));
    setInventoryTableData(updatedTableData);
  };


  


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getfee`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateFeeData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateFeeData = (newData) => {
    setFeeData(newData);
    const updatedTableData = newData.map((fee) => ({
      Id: fee.id,  // Replace with your actual ID property
      Order: fee.fee_order,
      Name: fee.name,
      Fee: fee.fee,
      Slug: fee.slug,

    }));
    setFeeTableData(updatedTableData);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getrole`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateRoleData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateRoleData = (newData) => {
    setRoleData(newData);
    const updatedTableData = newData.map((role) => ({
      Id: role.id,  // Replace with your actual ID property
      Name: role.name,
      DisplayName: role.display_name,


    }));
    setRoleTableData(updatedTableData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getuser`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateUserData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateUserData = (newData) => {
    setUserData(newData);
    const updatedTableData = newData.map((user) => ({
      Id: user.id,  // Replace with your actual ID property
      UserName: user.name,
      UserEmail: user.email,
      UserDefaultRole: user.default_role_id,
      UserImage: user.image,

    }));
    setUserTableData(updatedTableData);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getlead`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateLeadData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateLeadData = (newData) => {
    setLeadData(newData);
    const updatedTableData = newData.map((lead) => ({
      Id: lead.id,  // Replace with your actual ID property
      Project: lead.project_name,
      LeadName: lead.name,
      Email: lead.email,
      Phone: lead.phone,
      City: lead.city,
      Status: lead.status_id,
      Agent: lead.agent_name,
      Temperature: lead.temperature_id,
      Source: lead.source_id,
      Description: lead.description,

    }));
    setLeadTableData(updatedTableData);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/gettoken`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateTokenData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateTokenData = (newData) => {
    setTokenData(newData);
    const updatedTableData = newData.map((token) => ({
      Id: token.id,  // Replace with your actual ID property
      Office: token.office_id,
      Customer: token.customer_id,
      Amount: token.amount,
      DealAmount: token.deal_amount,
      Discount: token.discount,
      Downpayment: token.downpayment,
      TokenAmount: token.tokenamount,
      Deduction: token.deduction,
      Description: token.description,
      Date: token.date,

    }));
    setTokenTableData(updatedTableData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getinstallment`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateInstallmentData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateInstallmentData = (newData) => {
    setInstallmentData(newData);
    const updatedTableData = newData.map((installment) => ({
      Id: installment.id,  // Replace with your actual ID property
      Booking: installment.booking_id,
      OfficeAmount: installment.officeamount,
      DealAmount: installment.dealamount,
      DiscountAmount: installment.discountamount,
      Token: installment.token,
      TokenDate: installment.tokendate,
      DownpaymentAmount: installment.downpaymentamount,
      RemainingAmount: installment.remainingamount,
      InstallmentPeriod: installment.installmentperiod_id,
      InstallmentType: installment.installmenttype_id,
      PerMonth: installment.permonth,
      Dated: installment.dated,

    }));
    setInstallmentTableData(updatedTableData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getinstallmentperiod`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateInstallmentperiodData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateInstallmentperiodData = (newData) => {
    setLeadData(newData);
    const updatedTableData = newData.map((installmentperiod) => ({
      Id: installmentperiod.id,  // Replace with your actual ID property
      InstallmentPeriod: installmentperiod.installment_period,

    }));
    setInstallmentperiodTableData(updatedTableData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getinstallmenttype`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateInstallmenttypeData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateInstallmenttypeData = (newData) => {
    setInstallmenttypeData(newData);
    const updatedTableData = newData.map((installmenttype) => ({
      Id: installmenttype.id,  // Replace with your actual ID property
      Installment: installmenttype.installment,
      Value: installmenttype.value,
      BalloonPayment: installmenttype.balloon_payment,

    }));
    setInstallmenttypeTableData(updatedTableData);
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getallotment`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateAllotmentData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateAllotmentData = (newData) => {
    setAllotmentData(newData);
    const updatedTableData = newData.map((allotment) => ({
      Id: allotment.id,  // Replace with your actual ID property
      Project: allotment.project_name,
      Block: allotment.block_name,
      FileNo: allotment.file_num,
      Size: allotment.size_id,
      Status: allotment.status_id,
      FileFeature: allotment.file_feature,

    }));
    setAllotmentTableData(updatedTableData);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getmergerequest`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateMergeRequestData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateMergeRequestData = (newData) => {
    setMergeRequestData(newData);
    const updatedTableData = newData.map((mergerequest) => ({
      Id: mergerequest.id,  // Replace with your actual ID property
      Customer: mergerequest.customer,
      RefNum: mergerequest.reference_num,
      transferfee: mergerequest.transfer_fee,
      agent: mergerequest.agent_name,
      plot1: mergerequest.plot_first_id,
      plot2: mergerequest.plot_sec_id,
      cniccopy: mergerequest.cnic_copy,

    }));
    setMergeRequestTableData(updatedTableData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getbooking`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateBookingData(result);
        updateCommissionData(result);
        updateDiscountData(result);
        updateSaleData(result);
        

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);


  const updateBookingData = (newData) => {
    setBookingData(newData);
    const updatedTableData = newData.map((booking) => ({
      Id: booking.id,  // Replace with your actual ID property
      File: booking.file_id,
      reference: booking.reference,
      serial: booking.serial,
      customer: booking.customer,
      agent: booking.agent_name,
      commission: booking.commission,
      plotprice: booking.plotprice,
      commissionamount: booking.commissionamount,
      financialmonth: booking.financialmonth,
      financialyear: booking.financialyear,
      dated: booking.dated,
      paymenttype: booking.paymenttype,
      downpayment: booking.downpayment,
      tokenpayment: booking.tokenpayment,
      payorder: booking.payorder,
      cheque: booking.cheque,
      reciept: booking.cashreciept,
      bank: booking.bank_id,
      tenure: booking.tenure_id,
      discount: booking.discount,
      

    }));
    setBookingTableData(updatedTableData);
  };




  const updateCommissionData = (newData) => {
    setCommissionData(newData);
    const updatedTableData = newData.map((commission) => ({
      Id: commission.id,  // Replace with your actual ID property
      customer: commission.customer_id,
      agent: commission.agent_id,
      commission: commission.commission,
      plotprice: commission.plotprice,
      commissionamount: commission.commissionamount,
      dated: commission.dated,

    }));
    setCommissionTableData(updatedTableData);
  };





  const updateDiscountData = (newData) => {
    setDiscountData(newData);
    const updatedTableData = newData.map((discount) => ({
      Id: discount.id,  // Replace with your actual ID property
      customer: discount.customer_id,
      agent: discount.agent_id,
      plotprice: discount.plotprice,
      discount: discount.discount,
      dated: discount.dated,

    }));
    setDiscountTableData(updatedTableData);
  };

  const updateSaleData = (newData) => {
    setSaleData(newData);
    const updatedTableData = newData.map((sale) => ({
      Id: sale.id,  // Replace with your actual ID property
      customer: sale.customer_id,
      agent: sale.agent_id,
      plotprice: sale.plotprice,
      dated: sale.dated,

    }));
    setSaleTableData(updatedTableData);
  };

  




useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getcancellation`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateCancellationData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateCancellationData = (newData) => {
    setCancellationData(newData);
    const updatedTableData = newData.map((cancellation) => ({
      Id: cancellation.id,  // Replace with your actual ID property
      Serial: cancellation.serial_num,
      Customer: cancellation.customer_id,
      BookingRef: cancellation.booking_ref,
      Reason: cancellation.reason_id,
      Fee: cancellation.cancellation_fee,
      CNICCopy: cancellation.cnic_copy,
      DownpaymentReceipt: cancellation.downpaymentreceipt,
      AllotmentCertificate: cancellation.allotmentcertificate,
      CancellationReqLetter: cancellation.cancellation_req_letter,
      
      

    }));
    setCancellationTableData(updatedTableData);
  };





useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/gettransfer`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateTransferData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateTransferData = (newData) => {
    setTransferData(newData);
    const updatedTableData = newData.map((transfer) => ({
      Id: transfer.id,  // Replace with your actual ID property
      transferer_id: transfer.transferer_name,
      transfaree_id: transfer.transfaree_name,
      file: transfer.file_num,
      applicationform: transfer.applicationform,
      sellerdata: transfer.sellerdata,
      
      

    }));
    setTransferTableData(updatedTableData);
  };



useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/getcustomer`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        updateCustomerData(result);

      } catch (error) {
        console.error('Error fetching projects:', error.message);
      }
    };

    fetchData();
  }, []);

  const updateCustomerData = (newData) => {
    setCustomerData(newData);
    const updatedTableData = newData.map((customer) => ({
      Id: customer.id,  // Replace with your actual ID property
      customer_id: customer.customer_name,
      
      
      

    }));
    setCustomerTableData(updatedTableData);
  };



  return (
    <DataContext.Provider value={{
      projectData, updateProjectData, projectsTableData,
      blockData, updateBlockData, blocksTableData,
      categoriesData, updateCategoriesData, categoriesTableData,
      featuresData, updateFeaturesData, featuresTableData,
      feeData, updateFeeData, feeTableData,
      agentsData, updateAgentsData, agentsTableData,
      usersData, updateUsersData, usersTableData,
      inventoryData, updateInventoryData, inventoryTableData,
      roleData, updateRoleData, roleTableData,
      userData, updateUserData, userTableData,
      leadData, updateLeadData, leadTableData,
      tokenData, updateTokenData, tokenTableData,
      installmentData, updateInstallmentData, installmentTableData,
      installmentperiodData, updateInstallmentperiodData, installmentperiodTableData,
      installmenttypeData, updateInstallmenttypeData, installmenttypeTableData,
      allotmentData, updateAllotmentData, allotmentTableData,
      mergeRequestData, updateMergeRequestData, mergeRequestTableData,
      bookingData, updateBookingData, bookingTableData,
      cancellationData, updateCancellationData, cancellationTableData,
      commissionData, updateCommissionData, commissionTableData,
      discountData, updateDiscountData, discountTableData,
      saleData, updateSaleData, saleTableData,
      transferData, updateTransferData, transferTableData,
      customerData

      
      
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};

{/*
  tokenData, updateTokenData, tokenTableData,
      installmentData, updateInstallmentData, installmentTableData,
      installmentperiodData, updateinstallmentperiodData, installmentperiodTableData,
      installmenttypeData, updateInstallmenttypeData, installmenttypeTableData,
    */}