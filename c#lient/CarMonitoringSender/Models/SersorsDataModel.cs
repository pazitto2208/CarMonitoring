namespace CarMonitoringSender.Models
{
    public class SensorsDataModel(string CarId, int Speed, object TyresPressure)
    {
        public string carId { get; } = CarId;
        public int speed { get; } = Speed;
        public object tyresPressure { get; } = TyresPressure;
    }
}
