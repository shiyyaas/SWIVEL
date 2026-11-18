class SwivelLists {
  constructor() {
    this.data = {
      cameras: [
        { name: 'Ring-Doorbell-4B', maker: 'Ring', signal: '-45 dBm', evidence: 'MAC OUI match (Ring Inc.)' },
        { name: 'WyzeCam-V3', maker: 'Wyze', signal: '-58 dBm', evidence: 'Beacon SSID pattern + OUI' }
      ],
      trackers: [
        { name: 'Apple AirTag (Separated)', maker: 'Apple', signal: '-62 dBm', evidence: 'Find My continuity payload anomaly' },
        { name: 'Tile Pro', maker: 'Tile', signal: '-75 dBm', evidence: 'BLE manufacturer data match' }
      ],
      'public-safety': [
        { name: 'Axon-Body3-Fleet', maker: 'Axon', signal: '-50 dBm', evidence: 'High-confidence LE signature (3 beeps)' },
        { name: 'Motorola-Radio-LE', maker: 'Motorola Solutions', signal: '-65 dBm', evidence: 'Medium-confidence agency vendor' }
      ]
    };

    this.init();
  }

  init() {
    Object.keys(this.data).forEach(category => {
      const pane = document.getElementById(category);
      if (!pane) return;

      const container = document.createElement('div');
      container.className = 'hairline-box';
      container.innerHTML = `<h2>${category.toUpperCase()} REGISTRY</h2>`;

      this.data[category].forEach(item => {
        const itemBox = document.createElement('div');
        itemBox.style.border = '1px solid var(--celluloid-cream)';
        itemBox.style.padding = '12px';
        itemBox.style.margin = '12px 0';
        itemBox.style.backgroundColor = 'var(--projection-black)';
        itemBox.innerHTML = `
          <strong>${item.name}</strong><br>
          Maker: ${item.maker} | Signal: ${item.signal}<br>
          <em>Evidence: ${item.evidence}</em>
        `;
        container.appendChild(itemBox);
      });

      pane.appendChild(container);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new SwivelLists();
});
