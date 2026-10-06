const $ = (id) => document.getElementById(id);

const usd = (n) =>
  new Intl.NumberFormat("es-US", { style: "currency", currency: "USD" }).format(n);

const today = () =>
  new Date().toLocaleDateString("es-US", { year: "numeric", month: "long", day: "numeric" });

const makeRef = () =>
  "AAH-" + new Date().getFullYear() + "-" + Math.floor(100000 + Math.random() * 900000);

function showError(msg) {
  $("error").textContent = msg;
  $("error").hidden = false;
}

$("generate").addEventListener("click", () => {
  const name = $("name").value.trim();
  const value = Number($("amount").value);

  if (!name) return showError("Escribe el nombre completo del beneficiario.");
  if (!value || value <= 0) return showError("Escribe un monto mayor a $0.");

  $("error").hidden = true;
  $("r-name").textContent = name;
  $("r-amount").textContent = usd(value);
  $("r-date").textContent = today();
  $("r-ref").textContent = makeRef();

  $("setup").hidden = true;
  $("result").hidden = false;
  window.scrollTo(0, 0);
});

$("print").addEventListener("click", () => window.print());

$("reset").addEventListener("click", () => {
  $("name").value = "";
  $("amount").value = "";
  $("result").hidden = true;
  $("setup").hidden = false;
});