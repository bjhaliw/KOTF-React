import { Button } from "@material-ui/core";
import { Box } from "@mui/system";
import React, { useEffect } from "react";

function InnButtons(props) {
  useEffect(() => {
    let text = document.getElementById("mainTextArea").value;
    const welcomeText = `\n\nWelcome, ${player.name}, to the Iron Horse Inn! Feel free to grab a seat anywhere. If you're interested, you can rent a room to replenish your health as well.

Prices for the rooms are as follows:

Luxury Room (50 Gold): Feel well-rested! You will receive a 25% boost to your health and mana.
Regular Room (20 Gold): A cozy room for you to relax. Fully restore your health and mana.
Cheap Room (10 Gold): Not much in the way of comfort. Regain only 25% of your max health and mana.`;

    document.getElementById("mainTextArea").value += welcomeText; // Add the initial dialog
    document.getElementById("mainTextArea").scrollTop =
      document.getElementById("mainTextArea").scrollHeight; // Scroll the textarea to the bottom
  }, []);

  const { player, setPlayer, returnToTown, setTownOpen } = props;
  // The player selects the Luxury Room
  const handleLuxuryRoom = () => {
    if (player.money >= 50) {
      const newHealth = player.maxHealth + player.maxHealth * 0.25;
      const newMana = player.maxMana + player.maxMana * 0.25;
      const newPlayerObject = { ...player };
      newPlayerObject.health = newHealth;
      newPlayerObject.mana = newMana;
      newPlayerObject.money = newPlayerObject.money - 50;
      setPlayer(newPlayerObject);

      document.getElementById("mainTextArea").value +=
        "\n\nYou wake up the next morning feeling better than ever, and have a slight pep in your step now";
      document.getElementById("mainTextArea").scrollTop =
        document.getElementById("mainTextArea").scrollHeight; // Scroll the textarea to the bottom
    }
  };

  // The player selects the Regular Room
  const handleRegularRoom = () => {
    if (player.money >= 20) {
      const newPlayerObject = { ...player };

      // Make sure we don't ruin our boost
      if (newPlayerObject.health < newPlayerObject.maxHealth) {
        newPlayerObject.health = newPlayerObject.maxHealth;
      }

      // Make sure we don't ruin our boost
      if (newPlayerObject.mana < newPlayerObject.maxMana) {
        newPlayerObject.mana = newPlayerObject.maxMana;
      }

      newPlayerObject.money = newPlayerObject.money - 20;
      setPlayer(newPlayerObject);

      document.getElementById("mainTextArea").value +=
        "\n\nYou rest for the night and wake up feeling fully rejuvinated";
      document.getElementById("mainTextArea").scrollTop =
        document.getElementById("mainTextArea").scrollHeight; // Scroll the textarea to the bottom
    }
  };

  // The player selects the Cheap Room
  const handleCheapRoom = () => {
    if (player.money >= 10) {
      const newPlayerObject = { ...player };

      // Make sure we don't ruin our boost
      if (newPlayerObject.health < newPlayerObject.maxHealth) {
        newPlayerObject.health =
          newPlayerObject.health + newPlayerObject.maxHealth * 0.25;
        // Make sure we don't go over max health
        if (newPlayerObject.health > newPlayerObject.maxHealth) {
          newPlayerObject.health = newPlayerObject.maxHealth;
        }
      }

      // Make sure we don't ruin our boost
      if (newPlayerObject.mana < newPlayerObject.maxMana) {
        newPlayerObject.mana =
          newPlayerObject.maxMana + newPlayerObject.maxMana * 0.25;

        // Make sure we don't go over max mana
        if (newPlayerObject.mana < newPlayerObject.maxMana) {
          newPlayerObject.mana = newPlayerObject.maxMana;
        }
      }

      // Remove money
      newPlayerObject.money = newPlayerObject.money - 10;
      setPlayer(newPlayerObject);

      document.getElementById("mainTextArea").value +=
        "\n\nYou toss and turn the entire night and barely get any sleep.";
      document.getElementById("mainTextArea").scrollTop =
        document.getElementById("mainTextArea").scrollHeight; // Scroll the textarea to the bottom
    }
  };

  const handleBackToTown = () => {
    document.getElementById("mainTextArea").value +=
      "\n\nYou walk back to the middle of the town.";
    document.getElementById("mainTextArea").scrollTop =
      document.getElementById("mainTextArea").scrollHeight; // Scroll the textarea to the bottom

    setTownOpen(true);
    returnToTown();
  };

  return (
    <>
      <Box
        display="flex"
        gap={5}
        alignItems="center"
        justifyContent="center"
        alignContent="center"
      >
        <Button
          variant="contained"
          onClick={handleLuxuryRoom}
          disabled={player.money < 50}
          color="primary"
        >
          Luxury room
        </Button>
        <Button
          variant="contained"
          onClick={handleRegularRoom}
          disabled={player.money < 20}
          color="primary"
        >
          Regular Room
        </Button>
        <Button
          variant="contained"
          onClick={handleCheapRoom}
          disabled={player.money < 10}
          color="primary"
        >
          Cheap Room
        </Button>
        <Button variant="contained" onClick={handleBackToTown} color="primary">
          Back To Town
        </Button>
      </Box>
    </>
  );
}

export default InnButtons;
