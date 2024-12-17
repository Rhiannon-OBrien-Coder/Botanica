import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom"
import * as plotService from "../../services/userPlotService"
import PlotChosen from "./PlotChosen";

const VirtualGarden = () => {
  const [plotList, setPlotList] = useState([])

  useEffect(() => {
      const plotIndex = async () => {
        try {
          const plots = await plotService.index();
          if (plots.error) {
            throw new Error(plots.error);
          }
          setPlotList(plots.user_plots);
        } catch (error) {
          console.log("Error fetching plots:", error);
        }
      };
      plotIndex();
    }, []);

  const handleDelete = async(id) => {
    try {
      const deletedPlot = await plotService.deletePlot(id)
      if (deletedPlot.error) {
        throw new Error(deletedPlot.error);
      }
      console.log(deletedPlot)
      alert("Plot deleted")
    } catch (error) {
      console.log("Error deleting plot:", error);
    }
  }

  return (
    <>
      <h1>Virtual Garden</h1>
      {localStorage.token ? (
            <>
              {plotList.map((plot) => (
                <PlotChosen key={plot.id} plot={plot} handleDelete={handleDelete}/>
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

export default VirtualGarden;