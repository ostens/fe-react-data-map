import axios from "axios";

const myApi = axios.create({
  baseURL: "http://environment.data.gov.uk/flood-monitoring/id/stations",
});

export const fetchTideById = (id) => {
  return myApi.get(`/${id}/measures`).then((res) => {
    return res.data.items[0].latestReading;
  });
};

export const fetchStations = () => {
  return myApi.get("?type=TideGauge").then((res) => {
    return res.data.items;
  });
};
