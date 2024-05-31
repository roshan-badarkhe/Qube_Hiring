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
    downloadStatus: "Failed",
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
    downloadStatus: "Downloaded",
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
    serialNo: "PQR-234567",
    theatreName: "Palais des Congrès",
    location: {
      city: "Paris",
      state: "",
      country: "France",
    },
    ispPaymentResponsibility: "Palais des Congrès",
    bandwidth: "330 Mbps",
    avgBandwidth: "300 Mbps",
    planStartDate: "25th April",
    billingCycle: "Monthly",
    deviceStatus: "Online",
    downloadStatus: "Cancelled",
    osVersion: "5.9.1",
    storage: "550 GB",
  },
  {
    serialNo: "LMN-654321",
    theatreName: "Opéra Bastille",
    location: {
      city: "Paris",
      state: "",
      country: "France",
    },
    ispPaymentResponsibility: "Opéra Bastille",
    bandwidth: "300 Mbps",
    avgBandwidth: "280 Mbps",
    planStartDate: "10th January",
    billingCycle: "Monthly",
    deviceStatus: "Online",
    downloadStatus: "Downloading",
    osVersion: "4.7.3",
    storage: "600 GB",
  },
  {
    serialNo: "XYZ-456789",
    theatreName: "Théâtre des Champs-Élysées",
    location: {
      city: "Paris",
      state: "",
      country: "France",
    },
    ispPaymentResponsibility: "Théâtre des Champs-Élysées",
    bandwidth: "320 Mbps",
    avgBandwidth: "290 Mbps",
    planStartDate: "15th September",
    billingCycle: "Monthly",
    deviceStatus: "Offline",
    downloadStatus: "Failed",
    osVersion: "3.5.2",
    storage: "450 GB",
  },
  {
    serialNo: "ABC-987654",
    theatreName: "Opera Garnier",
    location: {
      city: "Paris",
      state: "",
      country: "France",
    },
    ispPaymentResponsibility: "Opera Garnier",
    bandwidth: "280 Mbps",
    avgBandwidth: "250 Mbps",
    planStartDate: "20th March",
    billingCycle: "Monthly",
    deviceStatus: "Online",
    downloadStatus: "Downloaded",
    osVersion: "2.1.0",
    storage: "400 GB",
  },
  {
    serialNo: "KJH-123456",
    theatreName: "Le Grand Palais",
    location: {
      city: "Paris",
      state: "",
      country: "France",
    },
    ispPaymentResponsibility: "Le Grand Palais",
    bandwidth: "350 Mbps",
    avgBandwidth: "320 Mbps",
    planStartDate: "5th June",
    billingCycle: "Monthly",
    deviceStatus: "Offline",
    downloadStatus: "Scheduled",
    osVersion: "1.2.3",
    storage: "500 GB",
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
  if (appliance.length !== 0) {
    res.status(200).send(appliance[0]);
  } else {
    res.status(404).send();
  }
});

app.listen(port, () => {
  console.log(`Mock server listening at http://localhost:${port}`);
});
