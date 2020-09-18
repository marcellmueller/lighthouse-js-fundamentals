let chooseStations = (stations) => {
  let chooseStations = [];
  for (let i = 0; i < stations.length; i++) {
    if (
      (stations[i][1] >= 20 && stations[i][2] === "school") ||
      (stations[i][1] >= 20 && stations[i][2] === "community centre")
    ) {
      chooseStations.push(stations[i][0]);
    }
  }
  return chooseStations;
};

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 10, "community centre"],
];

chooseStations(stations);
console.log(chooseStations(stations));
