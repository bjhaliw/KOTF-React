import React, { useMemo, useState } from "react";

// Material Imports
import Button from "@mui/material/Button";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import { DialogActions, makeStyles } from "@material-ui/core";
import { Box } from "@mui/system";
import { AppBar, DialogContent, Paper } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Local imports
import Item from "../Logic/Item";
import Table from "./Table";

const useStyles = makeStyles((theme) => ({
  textArea: {
    minWidth: 800,
    maxWidth: 800,
    minHeight: 610,
    maxHeight: 610,
  },
  grid: {
    justifyContent: "center",
    height: 610,
    width: 300,
  },
  buttons: {
    width: 150,
  },
  dialog: {
    width: 800,
    height: 800,
  },
}));

function StoreDialog(props) {
  // Custom UI styles
  const classes = useStyles();

  // Our props
  const { onClose, player, open, setPlayer } = props;

  // Close the dialog
  const handleClose = () => {
    onClose();
  };

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Skill Type",
        accessor: "skillType",
      },
      {
        Header: "Skill Increase",
        accessor: "skillValue",
      },
      {
        Header: "Price",
        accessor: "price",
      },
    ],
    []
  );

  const mainHand = useMemo(
    () => [
      new Item("Sword of Truth", 100, "Main Hand", "Attack", 10),
      new Item("Staff of Sorrows", 100, "Main Hand", "Attack", 10),
      new Item("Bow of Dank Memes", 100, "Main Hand", "Attack", 10),
    ],
    []
  );

  const offHand = useMemo(
    () => [
      new Item("Shield of Destiny", 100, "Off Hand", "Defense", 10),
      new Item("Orb of Mystery", 100, "Off Hand", "Defense", 10),
      new Item("Dagger of Daggers", 100, "Off Hand", "Defense", 10),
    ],
    []
  );

  const helmet = useMemo(
    () => [
      new Item("Helmet of Destruction", 100, "Helmet", "Defense", 10),
      new Item("Wizard Hat of the Skies", 100, "Helmet", "Defense", 10),
      new Item("Leather Cap of Wimps", 100, "Helmet", "Defense", 10),
    ],
    []
  );

  const armor = useMemo(
    () => [
      new Item("Armor of Memes", 100, "Armor", "Defense", 10),
      new Item("Heaven's Robe", 100, "Armor", "Defense", 10),
      new Item("Leather Armor", 100, "Armor", "Defense", 10),
    ],
    []
  );

  const amulet = useMemo(
    () => [
      new Item("Amulet of Smiting", 100, "Amulet", "Strength", 10),
      new Item("The Mind's Eye", 100, "Amulet", "Intelligence", 10),
      new Item("Pick of Destiny", 100, "Amulet", "Defense", 10),
    ],
    []
  );

  const ring = useMemo(
    () => [
      new Item("Ring of Stealth", 100, "Ring", "Defense", 10),
      new Item("The One True Ring", 100, "Ring", "Defense", 10),
      new Item("High School Class Ring", 100, "Ring", "Defense", 10),
    ],
    []
  );

  const potions = useMemo(
    () => [
      new Item("Small Health Potion", 100, "Misc", "Health", 10),
      new Item("Small Mana Potion", 100, "Misc", "Defense", 10),
    ],
    []
  );

  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Dialog onClose={handleClose} open={open} fullWidth={true} maxWidth={"xl"}>
      <DialogActions>
        <Button variant="contained" onClick={handleClose} color="error">
          X
        </Button>
      </DialogActions>
      <DialogTitle>
        <Typography component="center" variant="h3">
          General Store
        </Typography>
      </DialogTitle>

      <DialogContent>
        <Box padding={5} justifyContent="center">
          <Box sx={{ width: "100%" }} padding={2}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <AppBar position="static">
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  centered
                  indicatorColor="secondary"
                  textColor="inherit"
                  variant="fullWidth"
                >
                  <Tab label="Main Hand" {...a11yProps(0)} />
                  <Tab label="Off Hand" {...a11yProps(1)} />
                  <Tab label="Helmet" {...a11yProps(2)} />
                  <Tab label="Armor" {...a11yProps(3)} />
                  <Tab label="Amulet" {...a11yProps(4)} />
                  <Tab label="Ring" {...a11yProps(5)} />
                  <Tab label="Potions" {...a11yProps(6)} />
                </Tabs>
              </AppBar>
            </Box>

            <TabPanel value={value} index={0}>
              <Table columns={columns} data={mainHand} />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Table columns={columns} data={offHand} />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Table columns={columns} data={helmet} />
            </TabPanel>
            <TabPanel value={value} index={3}>
              <Table columns={columns} data={armor} />
            </TabPanel>
            <TabPanel value={value} index={4}>
              <Table columns={columns} data={amulet} />
            </TabPanel>
            <TabPanel value={value} index={5}>
              <Table columns={columns} data={ring} />
            </TabPanel>
            <TabPanel value={value} index={6}>
              <Table columns={columns} data={potions} />
            </TabPanel>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function CreateMainHandColumns() {
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Skill Type",
        accessor: "skillType",
      },
      {
        Header: "Skill Increase",
        accessor: "skillValue",
      },
      {
        Header: "Price",
        accessor: "price",
      },
    ],
    []
  );

  return columns;
}

export default StoreDialog;
