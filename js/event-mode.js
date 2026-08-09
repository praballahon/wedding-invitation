/* ==========================================
   EVENT MODE
========================================== */

const params = new URLSearchParams(
    window.location.search
);

const eventMode = params.get("event");

const weddingSection =
    document.getElementById("wedding-section");

const receptionSection =
    document.getElementById("reception-section");


/*
 * Default:
 * Show both Wedding + Reception
 */

if (!eventMode || eventMode === "all") {

    weddingSection.style.display = "";
    receptionSection.style.display = "";

}


/*
 * Reception-only link
 */

if (eventMode === "reception") {

    weddingSection.style.display = "none";
    receptionSection.style.display = "";

}