// Task 4: Detail View, Export, and Duress Wipe
document.addEventListener('DOMContentLoaded', () => {
  // Setup Export button simulation
  const exportBtn = document.getElementById('btn-export');
  const duressBtn = document.getElementById('btn-duress');
  const exportStatus = document.getElementById('export-status');

  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      exportStatus.textContent = "SUCCESS: Exported 4 files (SWIVEL_session_20261119.csv, .kml, .json, .wigle) to Android/data/com.millie.civops2/files/";
      exportStatus.style.color = "var(--celluloid-cream)";
    });
  }

  if (duressBtn) {
    duressBtn.addEventListener('click', () => {
      if (confirm("DURESS · CLEAR ALL: This will instantly delete every saved session log, export, and clear memory. Proceed?")) {
        // Clear lists and radar
        if (window.swivelResetState) {
          window.swivelResetState();
        }
        exportStatus.textContent = "PANIC WIPE EXECUTED: All session logs and exports deleted off disk. Clean state.";
        exportStatus.style.color = "#ff6b6b";
      }
    });
  }
});
