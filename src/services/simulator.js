let temperature = 70;
let battery = 90;
let signal = 95;
let orbital = 98;

function variation(
  value,
  maxVariation,
  min,
  max
) {
  const change =
    (Math.random() - 0.5) *
    maxVariation;

  let newValue =
    value + change;

  if (newValue < min)
    newValue = min;

  if (newValue > max)
    newValue = max;

  return Math.round(newValue);
}

export function generateTemperature() {
  temperature =
    variation(
      temperature,
      8,
      50,
      95
    );

  return temperature;
}

export function generateBattery() {
  battery =
    variation(
      battery,
      4,
      0,
      100
    );

  return battery;
}

export function generateSignal() {
  signal =
    variation(
      signal,
      8,
      0,
      100
    );

  return signal;
}

export function generateOrbitalStability() {
  orbital =
    variation(
      orbital,
      3,
      85,
      100
    );

  return orbital;
}