using CarMonitoringSender.Models;
using CarMonitoringSender.Sensors;
using System.Net.Http.Json;
using System.Text.Json;

namespace CarMonitoringSender
{
    public class Worker : BackgroundService
    {
        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            var client = new HttpClient();

            while (!stoppingToken.IsCancellationRequested)
            {
                var speedSensor = new SpeedSensor();
                var tyresPressureSensor = new TyresPressureSensor();

                object sensorJsonData = new SensorsDataModel(
                    "660e842d951281f01eaca682",
                    speedSensor.GetSpeedValue(), 
                    tyresPressureSensor.GetTyresPressureValue()
                );

                var response = await client.PostAsJsonAsync(
                    "http://localhost:3000/parameters",
                    sensorJsonData
                );

                Console.WriteLine(response);

                await Task.Delay(3000, stoppingToken);
            }
        }
    }
}
