document.addEventListener("visibilitychange", function () {
    const originalTitle = "Portfolio - Manley.B";
    if (document.hidden) {
        document.title = "👋 Reviens ici !";
    } else {
        document.title = originalTitle;
    }
});