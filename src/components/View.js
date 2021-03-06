import React, { useEffect, useState } from "react";
import { Paper, Typography, TextareaAutosize } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import StoreDialog from "../Util/StoreDialog";
import { Box, Divider } from "@mui/material";
import TownButtons from "../Util/TownButtons";
import InnButtons from "../Util/InnButtons";
import OutsideButtons from "../Util/OutsideButtons";
import BattleButtons from "../Util/BattleButtons";

const useStyles = makeStyles((theme) => ({
  textArea: {
    minWidth: 800,
    maxWidth: 800,
    minHeight: 410,
    maxHeight: 410,
  },
  grid: {
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    height: 510,
    width: 300,
  },
  buttons: {
    width: 150,
  },
}));

function View(props) {
  const classes = useStyles();

  const [inTown, setInTown] = useState(true);
  const [innOpen, setInnOpen] = useState(false);
  const [storeOpen, setStoreOpen] = useState(false);
  const [leaveTown, setLeaveTown] = useState(false);
  const [battleOpen, setBattleOpen] = useState(false);

  const textAreaPrompt =
    "You're standing in the middle of the town. The sun shines brightly on you as people go about their day around you.";

  const handleCloseInn = () => {
    setInnOpen(false);
  };

  const handleCloseStore = () => {
    setStoreOpen(false);
  };

  const handleCloseTown = () => {
    setInTown(false);
  };

  useEffect(() => {
    console.log(leaveTown);
  }, [leaveTown]);

  return (
    <>
      <Box
        display="flex"
        alignContent="center"
        alignItems="center"
        justifyContent="center"
        gap={15}
        padding={2}
      >
        <Paper elevation={2}>
          <Typography
            variant="h5"
            component="center"
            style={{ fontWeight: "bold" }}
          >
            Player Stats
          </Typography>

          <Divider variant="middle" />

          <Box display="inline-grid" gap={5} className={classes.grid}>
            <Typography variant="h6" component="center">
              Strength: {props.player.strength}
            </Typography>

            <Typography variant="h6" component="center">
              Dexterity: {props.player.dexterity}
            </Typography>

            <Typography variant="h6" component="center">
              Intelligence: {props.player.intelligence}
            </Typography>

            <Typography variant="h6" component="center">
              Charisma: {props.player.charisma}
            </Typography>

            <Typography variant="h6" component="center">
              Constitution: {props.player.constitution}
            </Typography>

            <Typography variant="h6" component="center">
              Wisdom: {props.player.wisdom}
            </Typography>
          </Box>
        </Paper>

        <Box
          display="inline-grid"
          gap={5}
          alignContent="center"
          alignItems="center"
          justifyContent="center"
        >
          <TextareaAutosize
            id="mainTextArea"
            className={classes.textArea}
            defaultValue={textAreaPrompt}
            onKeyDown={(e) => e.preventDefault()}
            placeholder=""
            minRows={50}
          />

          {inTown ? (
            <TownButtons
              setInnOpen={setInnOpen}
              setStoreOpen={setStoreOpen}
              setTownOpen={handleCloseTown}
              setLeaveTown={setLeaveTown}
            />
          ) : null}
          {innOpen ? (
            <InnButtons
              player={props.player}
              setPlayer={props.setPlayer}
              returnToTown={handleCloseInn}
              open={innOpen}
              setTownOpen={setInTown}
              sleep={props.sleep}
              setSleep={props.setSleep}
            />
          ) : null}
          {leaveTown ? (
            <OutsideButtons
              player={props.player}
              setPlayer={props.setPlayer}
              returnToTown={() => setLeaveTown(false)}
              setTownOpen={setInTown}
              setLeaveBattle={() => setBattleOpen(false)}
              setBattleOpen={setBattleOpen}
              sleep={props.sleep}
              setSleep={props.setSleep}
            />
          ) : null}
          {battleOpen ? (
            <BattleButtons
              player={props.player}
              setPlayer={props.setPlayer}
              returnToOutside={() => setLeaveTown(true)}
              leaveBattle={() => setBattleOpen(false)}
            />
          ) : null}
        </Box>

        <Paper elevation={2}>
          <Typography
            variant="h5"
            component="center"
            style={{ fontWeight: "bold" }}
          >
            Player Inventory
          </Typography>
          <Divider variant="middle" />

          <Box
            display="inline-grid"
            gap={5}
            width={300}
            className={classes.grid}
          >
            <Typography variant="h6" component="center">
              Main-Hand:{" "}
              {props.player.mainHand.name +
                ", " +
                props.player.mainHand.skill +
                " +" +
                props.player.mainHand.value}
            </Typography>

            <Typography variant="h6" component="center">
              Off-Hand:{" "}
              {props.player.offHand.name +
                ", " +
                props.player.offHand.skill +
                " +" +
                props.player.offHand.value}
            </Typography>

            <Typography variant="h6" component="center">
              Helmet:{" "}
              {props.player.helmet.name
                ? props.player.helmet.name +
                  ", " +
                  props.player.helmet.skill +
                  " +" +
                  props.player.helmet.value
                : "None"}
            </Typography>

            <Typography variant="h6" component="center">
              Armor:{" "}
              {props.player.armor.name
                ? props.player.armor.name +
                  ", " +
                  props.player.armor.skill +
                  " +" +
                  props.armor.armor.value
                : "None"}
            </Typography>

            <Typography variant="h6" component="center">
              Amulet:{" "}
              {props.player.amulet.name
                ? props.player.amulet.name +
                  ", " +
                  props.player.amulet.skill +
                  " +" +
                  props.player.amulet.value
                : "None"}
            </Typography>

            <Typography variant="h6" component="center">
              Ring:{" "}
              {props.player.ring.name
                ? props.player.ring.name +
                  ", " +
                  props.player.ring.skill +
                  " +" +
                  props.player.ring.value
                : "None"}
            </Typography>
          </Box>
        </Paper>
      </Box>

      <StoreDialog
        open={storeOpen}
        onClose={handleCloseStore}
        player={props.player}
        setPlayer={props.setPlayer}
      />
    </>
  );
}

export default View;
