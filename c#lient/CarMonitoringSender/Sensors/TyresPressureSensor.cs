namespace CarMonitoringSender.Sensors
{
    public class TyresPressureSensor
    {
        public object GetTyresPressureValue()
        {
            var tyresPressureValue = new
            {
                frontLeft = GetRandomPressure(),
                frontRight = GetRandomPressure(),
                rearLeft = GetRandomPressure(),
                rearRight = GetRandomPressure()
            };

            return tyresPressureValue;
        }

        private double GetRandomPressure()
        {
            Random random = new Random();
            return Math.Round(random.NextDouble() * (2.6 - 2.5) + 2.5, 2);
        }
    }
}
