//This is a sync file that we run every 2 days to get sync data from TT
const CONFIG = require("./config");
const axios = require("axios");
const mongoose = require("mongoose");
const TokenData = require("../models/tokenData");
const { getLocalDate } = require("../utils/dateUtil");

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

//put this in async function

mongoose
  .connect( process.env.DATABASE,
    {
      useNewUrlParser: true,
    }
  )
  .then(() => {
    console.log("connected to db");

    for (const [key, value] of Object.entries(CONFIG)) {
        //add await with cron script
       syncActive(value);
       syncHolder(value);
       syncFee(value); 
       syncTVL(value);  
    }
  });

async function syncActive(value){
    try {
        const name = value.NAME;

        const ttData = await axios.get(
          `https://api.tokenterminal.com/v2/internal/metrics/user_dau?project_ids=${value.TTSLUG}&interval=7d`,
          {
            headers: {
              Authorization: process.env.TT_BEARER,
            },
          }
        );

        console.log("fetched active user data for " + name);

        ttData.data.data.forEach(async (el) => {
          const date = getLocalDate(el.timestamp);

          const newObject = {
            date: new Date(date),

            activeHolders : el.value,
          };

          // console.log("new object");
          // console.log(newObject);

          // const oldMongoEntry = await TokenData.findOne({ tokenName: name, date }) || {};

          const updatedMongoEntry = await TokenData.findOneAndUpdate(
            { tokenName: name, date: new Date(date) },
            { ...newObject },
            { new: true, upsert: true }
          );

          // console.log("updated mongo entry ");
          // console.log(updatedMongoEntry);
        });
        console.log("finished updating active user " + name);
        await delay(5000);

        
    } catch (error) {
        console.log(error);
    }

}
async function syncHolder(value) {
  try {
    const name = value.NAME;

    const ttData = await axios.get(
      `https://api.tokenterminal.com/v2/internal/metrics/tokenholders?project_ids=${value.TTSLUG}&interval=7d`,
      {
        headers: {
          Authorization: process.env.TT_BEARER,
        },
      }
    );

    console.log("fetched holder data for " + name);

    ttData.data.data.forEach(async (el) => {
      const date = getLocalDate(el.timestamp);

      const newObject = {
        date: new Date(date),

        holders: el.value,
      };

      // console.log("new object");
      // console.log(newObject);

      // const oldMongoEntry = await TokenData.findOne({ tokenName: name, date }) || {};

      const updatedMongoEntry = await TokenData.findOneAndUpdate(
        { tokenName: name, date: new Date(date) },
        { ...newObject },
        { new: true, upsert: true }
      );

      // console.log("updated mongo entry ");
      // console.log(updatedMongoEntry);
    });
    console.log("finished updating holder " + name);
    await delay(5000);
  } catch (error) {
    console.log(error);
  }
}
async function syncFee(value){
    try {
        const name = value.NAME;

        const ttData = await axios.get(
          `https://api.tokenterminal.com/v2/internal/metrics/fees?project_ids=${value.TTSLUG}&interval=7d`,
          {
            headers: {
              Authorization: process.env.TT_BEARER,
            },
          }
        );

        console.log("fetched fee for " + name);

        ttData.data.data.forEach(async (el) => {
          const date = getLocalDate(el.timestamp);

          const newObject = {
            date: new Date(date),

            daily_fee : el.value,
          };

          // console.log("new object");
          // console.log(newObject);

          // const oldMongoEntry = await TokenData.findOne({ tokenName: name, date }) || {};

          const updatedMongoEntry = await TokenData.findOneAndUpdate(
            { tokenName: name, date: new Date(date) },
            { ...newObject },
            { new: true, upsert: true }
          );

          // console.log("updated mongo entry ");
          // console.log(updatedMongoEntry);
        });
        console.log("finished updating fee " + name);
        await delay(5000);

        
    } catch (error) {
        console.log(error);
    }

}

async function syncTVL(value) {
  try {
    const name = value.NAME;

    const ttData = await axios.get(
      `https://api.tokenterminal.com/v2/internal/metrics/tvl?project_ids=${value.TTSLUG}&interval=7d`,
      {
        headers: {
          Authorization: process.env.TT_BEARER,
        },
      }
    );

    console.log("fetched tvl for " + name);

    ttData.data.data.forEach(async (el) => {
      const date = getLocalDate(el.timestamp);

      const newObject = {
        date: new Date(date),

        tvl: el.value,
      };

      // console.log("new object");
      // console.log(newObject);

      // const oldMongoEntry = await TokenData.findOne({ tokenName: name, date }) || {};

      const updatedMongoEntry = await TokenData.findOneAndUpdate(
        { tokenName: name, date: new Date(date) },
        { ...newObject },
        { new: true, upsert: true }
      );

      // console.log("updated mongo entry ");
      // console.log(updatedMongoEntry);
    });
    console.log("finished updating tvl " + name);
    await delay(5000);
  } catch (error) {
    console.log(error);
  }
}