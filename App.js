import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

const App = () => {
  const [cells, setCells] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  // trạng thái hiện tại
  const [nextTurn, setNextTurn] = useState("X");
  const handlePress = (i, j) => {
    if (!cells[i][j]) {
      setCells([...cells]);
      cells[i][j] = nextTurn;
      if (nextTurn === "X") {
        setNextTurn("O");
      } else {
        setNextTurn("X");
      }
    }
    checkWinner(cells);
  };
  // const [winner, setWinner] = useState();

  const checkWinner = (cells) => {
    // Check for a winner in each row.
    for (let i = 0; i < 3; i++) {
      if (
        cells[i][0] === cells[i][1] &&
        cells[i][1] === cells[i][2] &&
        cells[i][0]
      ) {
        Alert.alert(`người chiến thắng là: ${cells[i][0]}`);
        handleReset();
      }
    }

    // Check for a winner in each column.
    for (let i = 0; i < 3; i++) {
      if (
        cells[0][i] === cells[1][i] &&
        cells[1][i] === cells[2][i] &&
        cells[0][i]
      ) {
        Alert.alert(`người chiến thắng là: ${cells[0][i]}`);
        handleReset();
      }
    }

    // Check for a winner in the diagonals.
    if (
      cells[0][0] === cells[1][1] &&
      cells[1][1] === cells[2][2] &&
      cells[0][0]
    ) {
      Alert.alert(`người chiến thắng là: ${cells[0][0]}`);
      handleReset();
    }

    if (
      cells[0][2] === cells[1][1] &&
      cells[1][1] === cells[2][0] &&
      cells[0][2]
    ) {
      Alert.alert(`người chiến thắng là: ${cells[0][2]}`);
      handleReset();
    }

    // There is no winner.
    return null;
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
    width: 300,
    height: 300,
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
    width: 70,
    height: 70,
    borderRadius: 5,
    backgroundColor: "#8EC7D2",
    borderWidth: 1,
    padding: 5,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },
  cellText: {
    fontSize: 26,
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
