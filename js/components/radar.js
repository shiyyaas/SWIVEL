class SwivelRadar {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.signals = [
      { type: 'wifi', name: 'Ring-Doorbell-4B', rssi: -45, category: 'CAMERAS' },
      { type: 'ble', name: 'Apple AirTag (Separated)', rssi: -62, category: 'TRACKERS' },
      { type: 'wifi', name: 'Axon-Body3-Fleet', rssi: -50, category: 'PUBLIC SAFETY' },
      { type: 'ble', name: 'Tile Pro', rssi: -75, category: 'TRACKERS' },
      { type: 'wifi', name: 'Netgear-Guest-5G', rssi: -80, category: 'NETWORKS' },
      { type: 'wifi', name: 'WyzeCam-V3', rssi: -58, category: 'CAMERAS' },
      { type: 'ble', name: 'Motorola-Radio-LE', rssi: -65, category: 'PUBLIC SAFETY' }
    ];

    this.render();
  }

  render() {
    this.container.innerHTML = '';
    this.container.style.position = 'relative';
    this.container.style.backgroundColor = '#000000';
    this.container.style.overflow = 'hidden';

    // Concentric radar circles
    [0.3, 0.6, 0.9].forEach((scale, i) => {
      const circle = document.createElement('div');
      circle.style.position = 'absolute';
      circle.style.top = '50%';
      circle.style.left = '50%';
      circle.style.transform = 'translate(-50%, -50%)';
      circle.style.width = `${scale * 100}%`;
      circle.style.height = `${scale * 100}%`;
      circle.style.border = '1px solid rgba(236, 228, 180, 0.2)';
      circle.style.borderRadius = '50%';
      this.container.appendChild(circle);
    });

    // Crosshairs
    const hLine = document.createElement('div');
    hLine.style.position = 'absolute';
    hLine.style.top = '50%';
    hLine.style.left = '0';
    hLine.style.width = '100%';
    hLine.style.height = '1px';
    hLine.style.backgroundColor = 'rgba(236, 228, 180, 0.3)';
    this.container.appendChild(hLine);

    const vLine = document.createElement('div');
    vLine.style.position = 'absolute';
    vLine.style.top = '0';
    vLine.style.left = '50%';
    vLine.style.width = '1px';
    vLine.style.height = '100%';
    vLine.style.backgroundColor = 'rgba(236, 228, 180, 0.3)';
    this.container.appendChild(vLine);

    // Blips
    this.signals.forEach((sig, index) => {
      const blip = document.createElement('div');
      blip.title = `${sig.name} (${sig.rssi} dBm)`;
      blip.style.position = 'absolute';

      // Position calculation based on index/rssi
      const angle = (index / this.signals.length) * 2 * Math.PI;
      const distance = Math.abs(sig.rssi) / 100; // closer RSSI = closer to center
      const x = 50 + Math.cos(angle) * distance * 40;
      const y = 50 + Math.sin(angle) * distance * 40;

      blip.style.left = `${x}%`;
      blip.style.top = `${y}%`;
      blip.style.width = '10px';
      blip.style.height = '10px';
      blip.style.transform = 'translate(-50%, -50%)';
      blip.style.backgroundColor = sig.type === 'wifi' ? '#ece4b4' : '#4f4d3c';
      blip.style.border = '1px solid #ece4b4';
      blip.style.cursor = 'pointer';

      blip.addEventListener('click', () => {
        alert(`Signal: ${sig.name}\nCategory: ${sig.category}\nRSSI: ${sig.rssi} dBm\nEvidence: Matched signature against registry.`);
      });

      this.container.appendChild(blip);
    });

    const label = document.createElement('div');
    label.style.position = 'absolute';
    label.style.bottom = '10px';
    label.style.left = '10px';
    label.style.fontSize = '12px';
    label.style.color = '#ece4b4';
    label.innerText = `ACTIVE RADAR: ${this.signals.length} SIGNALS TRACKED`;
    this.container.appendChild(label);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.getElementById('radar-container')) {
    new SwivelRadar('radar-container');
  }
});
