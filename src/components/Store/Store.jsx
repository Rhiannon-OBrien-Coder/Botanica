import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as plotOptionService from "../../services/plotOptionService";
import * as seedService from "../../services/seedService"
import * as plantService from "../../services/plantService"
import * as userPlotService from "../../services/userPlotService"
import PlotToBuy from "./PlotToBuy";
import SeedToBuy from "./SeedToBuy";

const Store = () => {
  const [plotOptionsList, setPlotOptionsList] = useState([])
  const [seedList, setSeedList] = useState([])
  
  useEffect(() => {
    const plotOptionIndex = async () => {
      try {
        const plotOptions = await plotOptionService.index();
        if (plotOptions.error) {
          throw new Error(plotOptions.error);
        }
        setPlotOptionsList(plotOptions.plot_options);
      } catch (error) {
        console.log("Error fetching plotOptions:", error);
      }
    };
    plotOptionIndex();
  }, []);

  useEffect(() => {
    const seedIndex = async () => {
      try {
        const seeds = await seedService.index();
        if (seeds.error) {
          throw new Error(seeds.error);
        }
        setSeedList(seeds.seeds);
      } catch (error) {
        console.log("Error fetching seeds:", error);
      }
    };
    seedIndex();
  }, []);

  const handleSeedBuy = async (seed) => {
    try {
      const type = seed.id
      const name = seed.name
      const newPlant = await plantService.create(type, name)
      if (newPlant.error) {
        throw new Error(newPlant.error);
      }
      console.log(newPlant)
    } catch (error) {
      console.log("Error buying seed:", error);
    }
  }

  const handlePlotBuy = async (plot) => {
    try {
      const type = plot.id
      const name = plot.name
      const newUserPlot = await userPlotService.create(type, name)
      if (newUserPlot.error) {
        throw new Error(newUserPlot.error);
      }
      alert("Successfully created a new plot!")
      console.log(newUserPlot)
    } catch (error) {
      console.log("Error buying plot:", error);
    }
  }

  return (
    <>
      <h1>Store</h1>
      {localStorage.token ? (
            <>
              <h2>Plot Options:</h2>
              {plotOptionsList.map((plot) => (
                <PlotToBuy key={plot.id} plot = {plot} handlePlotBuy = {handlePlotBuy}/>
              ))}
              <h2>Seeds:</h2>
              {seedList.map((seed) => (
                <SeedToBuy key = {seed.id} seed = {seed} handleSeedBuy = {handleSeedBuy}/>
              ))}
            </>
            ) : (
              <div>
                <h3>Thank you for your interest in Botanica!</h3>
                <p>Please <Link to={'/signup'}>create an account</Link> to get started.</p>
              </div>
            )}
    </>
  );
};

export default Store;