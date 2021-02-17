const [_, __, city] = process.argv;
const census = require("citysdk");
const axios = require("axios");

const censusPromise = async (county) => {
  return new Promise((resolve, reject) => {
    census(
      {
        vintage: 2019, // required
        geoHierarchy: {
          county: {
            lat: 26.124161,
            lng: -80.143593
          }
        }
      },
      (err, data) => {
        if (err) reject(err);
        else resolve(data);
      }
    );
  });
};

const citySearch = async (county) => {
  const convertCounty;
  const getData = await axios({
    method: "GET",
    url: `https://api.census.gov/data/2019/pep/housing?get=LASTUPDATE,HUEST,DATE_DESC&for=county:001&in=state:01`
  });

  console.log(county);
  console.log(getData.data);
};

citySearch(city);
