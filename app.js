const fields = Object.fromEntries(["battery", "speed", "temperature", "charge"].map(id => [id, document.getElementById(id)]));
const presets = {
  city: { speed: 36, temperature: 18, charge: 80 },
  motorway: { speed: 120, temperature: 23, charge: 90 },
  winter: { speed: 80, temperature: -9, charge: 95 },
};
const decimal = new Intl.NumberFormat("en", { minimumFractionDigits: 1, maximumFractionDigits: 1 });

function estimate() {
  const { battery, speed, temperature, charge } = Object.fromEntries(
    Object.entries(fields).map(([key, field]) => [key, Number(field.value)])
  );
  const drag = Math.max(0, speed - 45) ** 2 * 0.0011;
  const climate = Math.abs(temperature - 20) * 0.17;
  const consumption = 12.8 + drag + climate;
  const available = Math.max(0, battery * (charge - 5) / 100);
  document.getElementById("range").textContent = Math.round(available / consumption * 100);
  document.getElementById("efficiency").textContent = `${decimal.format(consumption)} kWh/100 km`;
  document.getElementById("energy").textContent = `${decimal.format(available)} kWh`;
  document.getElementById("speed-text").textContent = `${speed} km/h`;
  document.getElementById("temperature-text").textContent = `${temperature} °C`;
  document.getElementById("charge-text").textContent = `${charge}%`;
}

document.querySelector("form").addEventListener("input", estimate);
document.querySelectorAll("[data-preset]").forEach(button => {
  button.addEventListener("click", () => {
    for (const [key, value] of Object.entries(presets[button.dataset.preset])) fields[key].value = value;
    estimate();
  });
});
estimate();
