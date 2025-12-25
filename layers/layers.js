var wms_layers = [];

var format_ADMINISTRASIDESA_AR_25K_0 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_0 = format_ADMINISTRASIDESA_AR_25K_0.readFeatures(json_ADMINISTRASIDESA_AR_25K_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_0.addFeatures(features_ADMINISTRASIDESA_AR_25K_0);
var lyr_ADMINISTRASIDESA_AR_25K_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_0, 
                style: style_ADMINISTRASIDESA_AR_25K_0,
                popuplayertitle: 'ADMINISTRASIDESA_AR_25K',
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_0.png" /> ADMINISTRASIDESA_AR_25K'
            });
var format_BATASKECAMATAN1_1 = new ol.format.GeoJSON();
var features_BATASKECAMATAN1_1 = format_BATASKECAMATAN1_1.readFeatures(json_BATASKECAMATAN1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASKECAMATAN1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASKECAMATAN1_1.addFeatures(features_BATASKECAMATAN1_1);
var lyr_BATASKECAMATAN1_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASKECAMATAN1_1, 
                style: style_BATASKECAMATAN1_1,
                popuplayertitle: 'BATAS KECAMATAN 1',
                interactive: true,
                title: '<img src="styles/legend/BATASKECAMATAN1_1.png" /> BATAS KECAMATAN 1'
            });
var format_BATASTAMBAHAN1_2 = new ol.format.GeoJSON();
var features_BATASTAMBAHAN1_2 = format_BATASTAMBAHAN1_2.readFeatures(json_BATASTAMBAHAN1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASTAMBAHAN1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASTAMBAHAN1_2.addFeatures(features_BATASTAMBAHAN1_2);
var lyr_BATASTAMBAHAN1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASTAMBAHAN1_2, 
                style: style_BATASTAMBAHAN1_2,
                popuplayertitle: 'BATAS TAMBAHAN 1',
                interactive: true,
                title: '<img src="styles/legend/BATASTAMBAHAN1_2.png" /> BATAS TAMBAHAN 1'
            });
var format_NAMAKECAMATAN1_3 = new ol.format.GeoJSON();
var features_NAMAKECAMATAN1_3 = format_NAMAKECAMATAN1_3.readFeatures(json_NAMAKECAMATAN1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAMAKECAMATAN1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAMAKECAMATAN1_3.addFeatures(features_NAMAKECAMATAN1_3);
var lyr_NAMAKECAMATAN1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NAMAKECAMATAN1_3, 
                style: style_NAMAKECAMATAN1_3,
                popuplayertitle: 'NAMA KECAMATAN 1',
                interactive: true,
                title: '<img src="styles/legend/NAMAKECAMATAN1_3.png" /> NAMA KECAMATAN 1'
            });
var format_point_4 = new ol.format.GeoJSON();
var features_point_4 = format_point_4.readFeatures(json_point_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_4.addFeatures(features_point_4);
var lyr_point_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_4, 
                style: style_point_4,
                popuplayertitle: 'point',
                interactive: true,
                title: '<img src="styles/legend/point_4.png" /> point'
            });

lyr_ADMINISTRASIDESA_AR_25K_0.setVisible(true);lyr_BATASKECAMATAN1_1.setVisible(true);lyr_BATASTAMBAHAN1_2.setVisible(true);lyr_NAMAKECAMATAN1_3.setVisible(true);lyr_point_4.setVisible(true);
var layersList = [lyr_ADMINISTRASIDESA_AR_25K_0,lyr_BATASKECAMATAN1_1,lyr_BATASTAMBAHAN1_2,lyr_NAMAKECAMATAN1_3,lyr_point_4];
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BATASKECAMATAN1_1.set('fieldAliases', {'fid': 'fid', 'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BATASTAMBAHAN1_2.set('fieldAliases', {'id': 'id', });
lyr_NAMAKECAMATAN1_3.set('fieldAliases', {'id': 'id', 'nama': 'nama', });
lyr_point_4.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'foto': 'foto', 'gambar': 'gambar', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_BATASKECAMATAN1_1.set('fieldImages', {'fid': '', 'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_BATASTAMBAHAN1_2.set('fieldImages', {'id': '', });
lyr_NAMAKECAMATAN1_3.set('fieldImages', {'id': '', 'nama': '', });
lyr_point_4.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'foto': 'Range', 'gambar': 'ExternalResource', });
lyr_ADMINISTRASIDESA_AR_25K_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BATASKECAMATAN1_1.set('fieldLabels', {'fid': 'no label', 'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BATASTAMBAHAN1_2.set('fieldLabels', {'id': 'no label', });
lyr_NAMAKECAMATAN1_3.set('fieldLabels', {'id': 'no label', 'nama': 'inline label - always visible', });
lyr_point_4.set('fieldLabels', {'id': 'no label', 'Nama': 'inline label - always visible', 'foto': 'no label', 'gambar': 'inline label - always visible', });
lyr_point_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});