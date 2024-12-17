import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as plotOptionService from "../../services/plotOptionService";
import * as seedService from "../../services/seedService"

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
        setPlotOptionsList(plotOptions);
      } catch (error) {
        console.log("Error fetching plotOptions:", error);
      }
    };
    plotOptionIndex();
    console.log(plotOptionsList)
  }, [plotOption]);

  useEffect(() => {
    const seedIndex = async () => {
      try {
        const seeds = await seedService.index();
        if (seeds.error) {
          throw new Error(seeds.error);
        }
        setSeedList(seeds);
      } catch (error) {
        console.log("Error fetching seeds:", error);
      }
    };
    seedIndex();
  }, [seed]);

  return (
    <>
      <h1>Store</h1>
      {localStorage.token ? (
            <>
              <h2>Plot Options:</h2>
              {plotOptionsList.map((plotOption) => (
                <div key={plotOption.id} className="store-item">
                  <h3>{plotOption.name}</h3>
                  <h3>{plotOption.season}</h3>
                  <p>{plotOption.description}</p>
                  <h3>{plotOption.price}</h3>
                  <button>Buy</button>
                </div>
              ))}
              <h2>Seeds:</h2>
              {seedList.map((seed) => (
                <div key={seed.id} className="store-item">
                  <h3>{seed.name}</h3>
                  <h3>{seed.season}</h3>
                  <p>{seed.description}</p>
                  <h3>{seed.growth_period}</h3>
                  <h3>{seed.price}</h3>
                  <button>Buy</button>
                </div>
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