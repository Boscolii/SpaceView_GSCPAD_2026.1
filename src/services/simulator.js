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
  const criticalEvent =
    Math.random() < 0.1;

  if (criticalEvent) {
    temperature =
      Math.floor(
        Math.random() * 15 + 80
      );
  } else {
    temperature =
      variation(
        temperature,
        8,
        55,
        75
      );
  }

  return temperature;
}

export function generateBattery() {
  const criticalEvent =
    Math.random() < 0.05;

  if (criticalEvent) {
    battery = Math.floor(
      Math.random() * 20 + 10
    );
  } else {
    battery = variation(
      battery,
      8,
      70,
      100
    );
  }

  return battery;
}

export function generateSignal() {
  const criticalEvent =
    Math.random() < 0.05;

  if (criticalEvent) {
    signal = Math.floor(
      Math.random() * 25 + 5
    );
  } else {
    signal = variation(
      signal,
      10,
      60,
      100
    );
  }

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