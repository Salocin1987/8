ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3857").setExtent([-11791789.859175, 2562559.963490, -7455547.025872, 4935803.752215]);
var wms_layers = [];

var lyr_USA4_msk_cov_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "USA4_msk_cov",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/USA4_msk_cov_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-17844514.374162, 2131403.264117, -17221125.250655, 2547582.133414]
                            })
                        });
var lyr_USA2_msk_cov_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "USA2_msk_cov",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/USA2_msk_cov_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-19948452.750155, 6639001.808414, -14460402.073568, 11575440.030079]
                            })
                        });
var format_USA_adm1_2 = new ol.format.GeoJSON();
var features_USA_adm1_2 = format_USA_adm1_2.readFeatures(json_USA_adm1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_USA_adm1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_USA_adm1_2.addFeatures(features_USA_adm1_2);
var lyr_USA_adm1_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_USA_adm1_2, 
                style: style_USA_adm1_2,
                interactive: true,
                title: '<img src="styles/legend/USA_adm1_2.png" /> USA_adm1'
            });
var format_Photos_3 = new ol.format.GeoJSON();
var features_Photos_3 = format_Photos_3.readFeatures(json_Photos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Photos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Photos_3.addFeatures(features_Photos_3);cluster_Photos_3 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Photos_3
});
var lyr_Photos_3 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Photos_3, 
                style: style_Photos_3,
                interactive: true,
                title: '<img src="styles/legend/Photos_3.png" /> Photos '
            });
var format_Vidos_4 = new ol.format.GeoJSON();
var features_Vidos_4 = format_Vidos_4.readFeatures(json_Vidos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vidos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vidos_4.addFeatures(features_Vidos_4);cluster_Vidos_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Vidos_4
});
var lyr_Vidos_4 = new ol.layer.Vector({
                declutter: true,
                source:cluster_Vidos_4, 
                style: style_Vidos_4,
                interactive: true,
                title: '<img src="styles/legend/Vidos_4.png" /> Vidéos'
            });

lyr_USA4_msk_cov_0.setVisible(true);lyr_USA2_msk_cov_1.setVisible(true);lyr_USA_adm1_2.setVisible(true);lyr_Photos_3.setVisible(true);lyr_Vidos_4.setVisible(true);
var layersList = [lyr_USA4_msk_cov_0,lyr_USA2_msk_cov_1,lyr_USA_adm1_2,lyr_Photos_3,lyr_Vidos_4];
lyr_USA_adm1_2.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'TYPE_1': 'TYPE_1', 'ENGTYPE_1': 'ENGTYPE_1', 'NL_NAME_1': 'NL_NAME_1', 'VARNAME_1': 'VARNAME_1', });
lyr_Photos_3.set('fieldAliases', {'id': 'id', 'Nom': 'Nom', });
lyr_Vidos_4.set('fieldAliases', {'id': 'id', 'nom': 'nom', });
lyr_USA_adm1_2.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'TYPE_1': 'TextEdit', 'ENGTYPE_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'VARNAME_1': 'TextEdit', });
lyr_Photos_3.set('fieldImages', {'id': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Vidos_4.set('fieldImages', {'id': 'TextEdit', 'nom': '', });
lyr_USA_adm1_2.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'TYPE_1': 'no label', 'ENGTYPE_1': 'no label', 'NL_NAME_1': 'no label', 'VARNAME_1': 'no label', });
lyr_Photos_3.set('fieldLabels', {'id': 'no label', 'Nom': 'no label', });
lyr_Vidos_4.set('fieldLabels', {'id': 'no label', 'nom': 'no label', });
lyr_Vidos_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});