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

  const [roleData, setRoleData] = useState([]);
  const [roleTableData, setRoleTableData] = useState([]);

  const [userData, setUserData] = useState([]);
  const [userTableData, setUserTableData] = useState([]);





  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/getprojects', {
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
      Blocks: project.block_id,
      Agents: project.agent_id,
    }));
    setProjectsTableData(updatedTableData);
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/getblocks', {
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
        const response = await fetch('http://localhost:4000/getagents', {
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
      AgentName: agent.name,
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
        const response = await fetch('http://localhost:4000/getusers', {
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
      AgentName: user.name,
      Email: user.email,
      City: user.default_role_id,
      Commission: user.additional_role_id,
      Address: user.address,
      DOB: user.locale,
      Image: user.image,



    }));
    setUsersTableData(updatedTableData);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/getcategories', {
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
        const response = await fetch('http://localhost:4000/getfeatures', {
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
      BlockName: feature.feature_order,
      ProjectName: feature.name,
      TotalMarla: feature.slug,

    }));
    setFeaturesTableData(updatedTableData);
  };



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/getinventory', {
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
      Project: inventory.project_id,
      Block: inventory.block_id,
      File: inventory.file_no,
      Price: inventory.price,
      Size: inventory.size_id,
      Type: inventory.type_id,
      Status: inventory.status_id,

    }));
    setInventoryTableData(updatedTableData);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/getfee', {
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
      FeeOrder: fee.fee_order,
      Name: fee.name,
      Fee: fee.fee,
      Slug: fee.slug,

    }));
    setFeeTableData(updatedTableData);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/getrole', {
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
      BlockName: role.blockname,
      ProjectName: role.project_id,
      TotalMarla: role.totalmarla,
      Description: role.description,

    }));
    setRoleTableData(updatedTableData);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4000/getusers', {
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
    }}>
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  return useContext(DataContext);
};
