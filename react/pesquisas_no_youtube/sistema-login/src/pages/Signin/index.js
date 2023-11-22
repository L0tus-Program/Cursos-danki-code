import React, { useEffect } from "react";
import Log from "../../components/buttonLog";
import './style.css';
import ApexCharts from 'apexcharts';
import Cli from "../../components/Cli";

function Signin() {
  useEffect(() => {
    var options = {
      series: [44, 55],
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: ['Sucesso', 'Erro'],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
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
      <Cli />
      <Log />
    </section>
  );
}

export default Signin;
