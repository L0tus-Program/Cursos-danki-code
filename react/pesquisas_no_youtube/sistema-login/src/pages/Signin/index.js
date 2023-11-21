import React, { useEffect } from "react";
import Log from "../../components/buttonLog";
import './style.css';
import ApexCharts from 'apexcharts';
import Cli from "../../components/Cli";

function Signin() {
  useEffect(() => {
    const options = {
      chart: {
        type: 'line'
      },
      series: [{
        name: 'sales',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
      }],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
    };
    
    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    // Limpeza ao desmontar o componente
    return () => {
      chart.destroy();
    };
  }, []); // Array de dependência vazio significa que o efeito roda apenas na montagem e desmontagem

  return (
    <section className="user">
      <h2>Painel principal de usuario</h2>
      <div id="box-chart">
        <div id="chart"></div>
      </div>
      <Cli/>
      <Log/>
    </section>
  );
}

export default Signin;
