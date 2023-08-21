import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const App = () => {
  const [cells, setCells] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  // trạng thái hiện tại
  const [activePlayer, setActivePlayer] = useState("X");
  const handlePress = (i, j) => {
    let temp = [...cells];
    temp[i][j] = activePlayer;
    setCells(temp);
    if (activePlayer === "X") {
      setActivePlayer("O");
    } else {
      setActivePlayer("X");
    }
  };

  const handleReset = () => {
    setCells([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  };
  return (
    <View style={styles.container}>
      <View style={styles.board}>
        {cells.map((row, i) => (
          <View style={styles.row}>
            {row.map((cell, j) => (
              <TouchableOpacity
                key={(i, j)}
                style={styles.cell}
                onPress={() => handlePress(i, j)}
              >
                <Text style={styles.cellText}>{cell}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
      <TouchableOpacity onPress={handleReset} style={styles.resetButton}>
        <Text>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  board: {
    width: 310,
    height: 310,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: "4D8CF5",
  },
  row: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
  },
  cell: {
    borderRadius: 5,
    backgroundColor: "#8EC7D2",
    borderWidth: 1,
    padding: 15,
    overflow: "hidden",
  },
  cellText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  resetButton: {
    width: 100,
    height: 40,
    backgroundColor: "#f00",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
  },
});

export default App;
