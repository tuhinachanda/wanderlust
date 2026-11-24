// Wanderlust Client-Side Scripts

document.addEventListener("DOMContentLoaded", () => {
  // Bootstrap 5 client-side form validation
  const forms = document.querySelectorAll(".needs-validation");
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });

  // Tax Toggle Switch functionality
  const taxSwitch = document.getElementById("taxSwitch");
  if (taxSwitch) {
    taxSwitch.addEventListener("change", () => {
      const taxInfoList = document.querySelectorAll(".tax-info");
      taxInfoList.forEach((info) => {
        if (taxSwitch.checked) {
          info.classList.remove("d-none");
          info.classList.add("d-inline");
        } else {
          info.classList.remove("d-inline");
          info.classList.add("d-none");
        }
      });
    });
  }

  // Booking Widget Date Calculation & Total calculation
  const bookingForm = document.getElementById("bookingForm");
  const checkInInput = document.getElementById("checkIn");
  const checkOutInput = document.getElementById("checkOut");

  if (bookingForm && checkInInput && checkOutInput) {
    const pricePerNight = parseFloat(bookingForm.dataset.price) || 0;
    const today = new Date().toISOString().split("T")[0];
    
    // Set min check-in date to today
    checkInInput.setAttribute("min", today);

    // When check-in changes, adjust min check-out date
    checkInInput.addEventListener("change", () => {
      const checkInVal = checkInInput.value;
      if (checkInVal) {
        const nextDay = new Date(checkInVal);
        nextDay.setDate(nextDay.getDate() + 1);
        const nextDayStr = nextDay.toISOString().split("T")[0];
        checkOutInput.setAttribute("min", nextDayStr);
        if (!checkOutInput.value || checkOutInput.value <= checkInVal) {
          checkOutInput.value = nextDayStr;
        }
        calculateBookingSummary();
      }
    });

    checkOutInput.addEventListener("change", calculateBookingSummary);

    function calculateBookingSummary() {
      const checkInVal = checkInInput.value;
      const checkOutVal = checkOutInput.value;

      if (checkInVal && checkOutVal) {
        const inDate = new Date(checkInVal);
        const outDate = new Date(checkOutVal);

        if (outDate > inDate) {
          const diffTime = Math.abs(outDate - inDate);
          const diffDays = Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
          const subtotal = diffDays * pricePerNight;
          const cleaningFee = 500;
          const taxes = Math.round(subtotal * 0.18);
          const total = subtotal + cleaningFee + taxes;

          const label = document.getElementById("pricePerNightLabel");
          const subtotalEl = document.getElementById("subtotalPrice");
          const taxEl = document.getElementById("taxPrice");
          const totalEl = document.getElementById("totalCalculatedPrice");

          if (label) label.textContent = `₹${pricePerNight.toLocaleString("en-IN")} x ${diffDays} night${diffDays > 1 ? "s" : ""}`;
          if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString("en-IN")}`;
          if (taxEl) taxEl.textContent = `₹${taxes.toLocaleString("en-IN")}`;
          if (totalEl) totalEl.textContent = `₹${total.toLocaleString("en-IN")}`;
        }
      }
    }
  }
});
