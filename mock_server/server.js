import express from "express";
import cors from "cors";
const app = express();
app.use(cors());

const port = 3001;

const appliances = [
  {
    serialNo: "KLD-987456",
    theatreName: "Galaxy Multiplex",
    location: {
      city: "Chennai",
      state: "Tamil Nadu",
      country: "India",
    },
    ispPaymentResponsibility: "Theatre",
    bandwidth: "1 Gbps",
    avgBandwidth: "850 Mbps",
    planStartDate: "23rd Feb",
    billingCycle: "Yearly",
    deviceStatus: "Offline",
    downloadStatus: "Failed",
    osVersion: "2.4.9.8",
    storage: "1 TB",
  },
  {
    serialNo: "JYD-123456",
    theatreName: "Capitol Cinema",
    location: {
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
    },
    ispPaymentResponsibility: "PVR",
    bandwidth: "250 Mbps",
    avgBandwidth: "180 Mbps",
    planStartDate: "5th Aug",
    billingCycle: "Quarterly",
    deviceStatus: "Online",
    downloadStatus: "Downloading",
    osVersion: "3.7.1.0",
    storage: "250 GB",
  },
  {
    serialNo: "MNR-789012",
    theatreName: "Raj Mandir",
    location: {
      city: "Jaipur",
      state: "Rajasthan",
      country: "India",
    },
    ispPaymentResponsibility: "Theatre",
    bandwidth: "100 Mbps",
    avgBandwidth: "75 Mbps",
    planStartDate: "10th Nov",
    billingCycle: "Monthly",
    deviceStatus: "Online",
    downloadStatus: "Downloaded",
    osVersion: "5.0.6.4",
    storage: "128 GB",
  },
  {
    serialNo: "XWZ-345678",
    theatreName: "Empire Cinemas",
    location: {
      city: "Los Angeles",
      state: "California",
      country: "USA",
    },
    ispPaymentResponsibility: "Empire Cinemas",
    bandwidth: "5 Gbps",
    avgBandwidth: "4.8 Gbps",
    planStartDate: "1st Jul",
    billingCycle: "Yearly",
    deviceStatus: "Online",
    downloadStatus: "Scheduled",
    osVersion: "1.8.3.6",
    storage: "2 TB",
  },
  {
    serialNo: "LOP-102345",
    theatreName: "Majestic Theatre",
    location: {
      city: "London",
      state: "",
      country: "UK",
    },
    ispPaymentResponsibility: "Majestic Theatre",
    bandwidth: "200 Mbps",
    avgBandwidth: "150 Mbps",
    planStartDate: "19th Dec",
    billingCycle: "Biannual",
    deviceStatus: "Offline",
    downloadStatus: "Cancelled",
    osVersion: "9.2.0.7",
    storage: "500 GB",
  },
  {
    serialNo: "TYU-876543",
    theatreName: "Grand Rex",
    location: {
      city: "Paris",
      state: "",
      country: "France",
    },
    ispPaymentResponsibility: "Grand Rex",
    bandwidth: "300 Mbps",
    avgBandwidth: "270 Mbps",
    planStartDate: "8th Jun",
    billingCycle: "Monthly",
    deviceStatus: "Online",
    downloadStatus: "Downloading",
    osVersion: "0.5.7.1",
    storage: "320 GB",
  },
  {
    serialNo: "TYU-876543",
    theatreName: "Grand Rex",
    location: {
      city: "Paris",
      state: "",
      country: "France",
    },
    ispPaymentResponsibility: "Grand Rex",
    bandwidth: "300 Mbps",
    avgBandwidth: "270 Mbps",
    planStartDate: "27th Dec",
    billingCycle: "Monthly",
    deviceStatus: "Online",
    downloadStatus: "Downloading",
    osVersion: "0.5.7.1",
    storage: "320 GB",
  },
  {
    serialNo: "TYU-876543",
    theatreName: "Grand Rex",
    location: {
      city: "Paris",
      state: "",
      country: "France",
    },
    ispPaymentResponsibility: "Grand Rex",
    bandwidth: "300 Mbps",
    avgBandwidth: "270 Mbps",
    planStartDate: "29th Sep",
    billingCycle: "Monthly",
    deviceStatus: "Online",
    downloadStatus: "Downloading",
    osVersion: "0.5.7.1",
    storage: "320 GB",
  },
  {
    serialNo: "TYU-876543",
    theatreName: "Grand Rex",
    location: {
      city: "Paris",
      state: "",
      country: "France",
    },
    ispPaymentResponsibility: "Grand Rex",
    bandwidth: "300 Mbps",
    avgBandwidth: "270 Mbps",
    planStartDate: "15th Nov",
    billingCycle: "Monthly",
    deviceStatus: "Online",
    downloadStatus: "Downloading",
    osVersion: "0.5.7.1",
    storage: "320 GB",
  },
  {
    serialNo: "TYU-876543",
    theatreName: "Grand Rex",
    location: {
      city: "Paris",
      state: "",
      country: "France",
    },
    ispPaymentResponsibility: "Grand Rex",
    bandwidth: "300 Mbps",
    avgBandwidth: "270 Mbps",
    planStartDate: "3rd Mar",
    billingCycle: "Monthly",
    deviceStatus: "Online",
    downloadStatus: "Downloading",
    osVersion: "0.5.7.1",
    storage: "320 GB",
  },
  {
    serialNo: "TYU-876543",
    theatreName: "Grand Rex",
    location: {
      city: "Paris",
      state: "",
      country: "France",
    },
    ispPaymentResponsibility: "Grand Rex",
    bandwidth: "300 Mbps",
    avgBandwidth: "270 Mbps",
    planStartDate: "11th May",
    billingCycle: "Monthly",
    deviceStatus: "Online",
    downloadStatus: "Downloading",
    osVersion: "0.5.7.1",
    storage: "320 GB",
  },
  {
    serialNo: "TYU-876543",
    theatreName: "Grand Rex",
    location: {
      city: "Paris",
      state: "",
      country: "France",
    },
    ispPaymentResponsibility: "Grand Rex",
    bandwidth: "300 Mbps",
    avgBandwidth: "270 Mbps",
    planStartDate: "17th Apr",
    billingCycle: "Monthly",
    deviceStatus: "Online",
    downloadStatus: "Downloading",
    osVersion: "0.5.7.1",
    storage: "320 GB",
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/v1/appliances", (req, res) => {
  res.send(appliances);
});

app.get("/api/v1/appliance/:applianceId/info", (req, res) => {
  const applianceId = req.params.applianceId;
  const appliance = appliances.filter((el) => el.serialNo === applianceId);
  res.send(appliance[0]);
});

app.listen(port, () => {
  console.log(`Mock server listening at http://localhost:${port}`);
});
