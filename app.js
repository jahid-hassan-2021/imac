let memoryCost = 0;
let storageCost = 0;
let deliveryCost = 0;

function handelCustomization(id, extraCost) {
  document.getElementById(`${id}`).innerHTML = extraCost;

  if (id == `memoryCost`) {
    memoryCost = extraCost;
  }
  if (id == `storageCost`) {
    storageCost = extraCost;
  }
  if (id == `deliveryCost`) {
    deliveryCost = extraCost;
  }

  document.getElementById(`totalWithoutPromo`).innerHTML =
    1299 + memoryCost + storageCost + deliveryCost;
  document.getElementById("totalwithpromo").innerHTML =
    1299 + memoryCost + storageCost + deliveryCost;
}

function handelPromo() {
  let promoInput = document.getElementById("promoInput").value;
  if (promoInput == `amigoriv`) {
    let totalWithoutPromo =
      document.getElementById(`totalWithoutPromo`).innerHTML;
    let discount = totalWithoutPromo - (totalWithoutPromo * 20) / 100;
    document.getElementById("totalwithpromo").innerHTML = discount;
  }else{
    document.getElementById("worning").innerHTML = "tui sala borolok";
  }
}
