/* ==========================================
   RSVP MODAL
========================================== */
 
const rsvpOpenBtn =
    document.getElementById("rsvp-open-btn");
 
const rsvpModal =
    document.getElementById("rsvp-modal");
 
const rsvpCloseBtn =
    document.getElementById("rsvp-close-btn");
 
const rsvpOverlay =
    document.getElementById("rsvp-overlay");
 
const rsvpForm =
    document.getElementById("rsvp-form");
 
const rsvpEvent =
    document.getElementById("rsvp-event");
 
const rsvpAttendance =
    document.getElementById("rsvp-attendance");

const eventTypeGroup =
    document.getElementById("event-type-group");
 
const rsvpEventType =
    document.getElementById("rsvp-event-type");
 
const guestCountGroup =
    document.getElementById("guest-count-group");
 
const rsvpGuests =
    document.getElementById("rsvp-guests");
 
const rsvpSubmit =
    document.getElementById("rsvp-submit");
 
const rsvpButtonText =
    document.getElementById("rsvp-button-text");
 
const rsvpStatus =
    document.getElementById("rsvp-status");
 
 
/* ==========================================
   EVENT
========================================== */
eventModeType = "wedding";
rsvpEvent.value =eventModeType;

/* ==========================================
   OPEN MODAL
========================================== */
 
function openRsvp() {
 
    rsvpModal.classList.add("active");
 
    rsvpModal.setAttribute(
        "aria-hidden",
        "false"
    );
 
    document.body.style.overflow =
        "hidden";
 
}
 
 
/* ==========================================
   CLOSE MODAL
========================================== */
 
function closeRsvp() {
 
    rsvpModal.classList.remove("active");
 
    rsvpModal.setAttribute(
        "aria-hidden",
        "true"
    );
 
    document.body.style.overflow =
        "";
 
}
 
 
/* ==========================================
   BUTTON
========================================== */
 
if (rsvpOpenBtn) {
 
    rsvpOpenBtn.addEventListener(
        "click",
        openRsvp
    );
 
}
 
 
/* ==========================================
   CLOSE BUTTON
========================================== */
 
if (rsvpCloseBtn) {
 
    rsvpCloseBtn.addEventListener(
        "click",
        closeRsvp
    );
 
}
 
 
/* ==========================================
   CLICK OUTSIDE
========================================== */
 
if (rsvpOverlay) {
 
    rsvpOverlay.addEventListener(
        "click",
        closeRsvp
    );
 
}
 
 
/* ==========================================
   ESC KEY
========================================== */
 
document.addEventListener(
    "keydown",
    function (event) {
 
        if (
            event.key === "Escape" &&
            rsvpModal.classList.contains("active")
        ) {
 
            closeRsvp();
 
        }
 
    }
);
 
 
/* ==========================================
   ATTENDANCE
========================================== */
 
if (rsvpAttendance) {
 
    rsvpAttendance.addEventListener(
        "change",
        function () {
 
            if (this.value === "No") {
 
                guestCountGroup.style.display = "none";
                eventTypeGroup.style.display = "none";

                rsvpGuests.value = "0";
                rsvpEventType.value = "";
 
            } else {
 
                guestCountGroup.style.display = "flex";
                eventTypeGroup.style.display = "flex";
 
                if (rsvpGuests.value === "0") {
                    rsvpGuests.value = "1";
                }
                if(rsvpEventType.value === "") {
                    rsvpEventType.value="both"
                }
 
            }
 
        }
    );
 
}
 
 
/* ==========================================
   FORM SUBMIT
========================================== */
 
if (rsvpForm) {
 
    rsvpForm.addEventListener(
        "submit",
        async function (event) {
 
            event.preventDefault();
 
 
            // Disable button
            rsvpSubmit.disabled = true;
 
            rsvpButtonText.textContent =
                "Submitting...";
 
            rsvpStatus.textContent = "";
 
 
            try {
 
                const formData =
                    new FormData(rsvpForm);
 
 
                /*
                 * no-cors is intentional.
                 *
                 * We don't need to read the
                 * Google response. We only need
                 * to send the RSVP.
                 */
 
                await fetch(
                    rsvpForm.action,
                    {
                        method: "POST",
 
                        body: new URLSearchParams(
                            formData
                        ),
 
                        mode: "no-cors"
                    }
                );
 
 
                // Assume submission reached
                // Apps Script successfully
 
                rsvpForm.reset();
 
 
                // Restore event after reset
 
                rsvpEvent.value =
                    eventMode;
 
 
                // Restore guest selector
 
                guestCountGroup.style.display =
                    "flex";
 
                rsvpGuests.value = "1";
 
 
                // Restore button
 
                rsvpSubmit.disabled = false;
 
                rsvpButtonText.textContent =
                    "Confirm";
 
 
                // Show success
                if(rsvpAttendance.value === "No") {
                    rsvpStatus.textContent = "Sad to know you are not coming.";
                }
                else {
                    rsvpStatus.textContent = "Saved. Happy to know your coming ❤️";
                }

                // Close popup
 
                setTimeout(
                    function () {
 
                        closeRsvp();
 
                        rsvpStatus.textContent =
                            "";
 
                    },
                    3000
                );
 
 
            } catch (error) {
 
                console.error(
                    "RSVP submission error:",
                    error
                );
 
 
                rsvpSubmit.disabled =
                    false;
 
                rsvpButtonText.textContent =
                    "Confirm";
 
 
                rsvpStatus.textContent =
                    "Unable to submit. Please try again.";
 
            }
 
        }
    );
 
}
