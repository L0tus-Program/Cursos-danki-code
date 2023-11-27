import React, { useEffect } from "react";
import Log from "../../components/buttonLog";
import './style.css';
import ApexCharts from 'apexcharts';
import Cli from "../../components/Cli";
import DB from "../../components/buttonDB"
import Footer from "../../components/Footer";


function Signin() {
  useEffect(() => {
    fetch('https://chat.conexaoia.digital/codigos_return', {
      method: 'GET',
      headers: {
        'X-API-KEY': 'F14C7D7625414A3E5DA1811349667'
      }
    })
      .then(response => response.json())
      .then(result => {
        console.log(result)
        // Separar os valores em variáveis diferentes
        const { 200: code200 = result[0].x_vezes, 201: code201 = result[1].x_vezes, 400: code400 = result[2].x_vezes, 401: code401 = result[3].x_vezes, 500: code500 = result[4].x_vezes } = result;
        
        // Usar os valores como necessário
        console.log('Código 200:', code200);
        console.log('Código 201:', code201);
        console.log('Código 400:', code400);
        console.log('Código 401:', code401);
        console.log('Código 500:', code500);

        var options = {
          series: [code200, code201, code400, code401, code500],
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ['200', '201', '400', '401', '500'],
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

        // Renderizar o gráfico com as opções
        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();

        // Limpeza ao desmontar o componente
        return () => {
          chart.destroy();
        };
      })
      .catch(error => {
        console.error('Erro:', error);
      });
  }, []); // Array de dependência vazio significa que o efeito roda apenas na montagem e desmontagem

  return (
    <section className="user">
      <h2>Painel principal de usuario</h2>
      <div id="box-chart">
        <div id="chart"></div>
      </div>
      <Cli />
      <Log />
      <DB />
      <Footer />
    </section>
  );
}

export default Signin;