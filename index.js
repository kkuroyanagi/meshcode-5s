
const fs = require('fs');
require('date-utils');

const content = fs.readFileSync('.\\N06-18_GML\\N06-18_HighwaySection.geojson');
const obj = JSON.parse(content);

const nowStr = new Date().toFormat('YYYYMMDD_HH24MISS');
const outputFilepath = '.\\5s_meshcode_' + nowStr + '.txt';

obj.features.forEach(feat => {
    feat.geometry.coordinates.forEach(coord => {
        const lon = coord[0];
        const lat = coord[1];

        const meshcode = Math.floor( lon * 3600 / 5.0) * 5 + '_' + Math.floor(lat * 3600 / 5.0) * 5;

        fs.appendFileSync(outputFilepath, meshcode + '\r\n');
    })
});

console.log('終了');


