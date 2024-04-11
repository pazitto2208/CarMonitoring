namespace CarMonitoringSender.Sensors
{
    public class SpeedSensor
    {
        public int GetSpeedValue()
        {
            int speedValue = new Random().Next(0, 130);
            return speedValue;
        }
    }
}
