const [_, __, city] = process.argv;
const census = require("citysdk");
const axios = require("axios");

const citySearch = async (city) => {
  const getData = await axios({
    method: "GET",
    url: `https://api.census.gov/data/2019/pep/housing?get=LASTUPDATE,HUEST,DATE_DESC&for=county:001&in=state:01`
  });

  console.log(city);
  console.log(getData.data);
  //   census(
  //     {
  //       vintage: 2019, // required
  //       geoHierarchy: {
  //         county: {
  //           lat: 26.124161,
  //           lng: -80.143593
  //         },
  //         sourcePath: ["pep", "housing"],
  //         values: ["HUEST"]
  //       }
  //     },
  //     (err, res) => console.log("debug", res)
  //   );
};

citySearch(city);
