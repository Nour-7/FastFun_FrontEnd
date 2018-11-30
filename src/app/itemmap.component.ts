import { Component, Input } from '@angular/core';

declare var L: any;
@Component({
    selector: 'map',
    template: `
     <div id="mapid"></div>   
    `
})
export class ImapComponent {
    @Input()
    lat : number
    @Input()
    long : number
    
    ngOnInit() {
        
        var mymap = L.map('mapid').setView([this.lat, this.long], 13);

        L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}.png', {
            attribution: 'Tiles &copy; Esri &mdash; Source: Esri, DeLorme, NAVTEQ, USGS, Intermap, iPC, NRCAN, Esri Japan, METI, Esri China (Hong Kong), Esri (Thailand), TomTom, 2012',
            noWrap: true
        }).addTo(mymap);


        
    }
}
