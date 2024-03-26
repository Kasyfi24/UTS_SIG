var wms_layers = [];

var format_WilayahAdministrasi_0 = new ol.format.GeoJSON();
var features_WilayahAdministrasi_0 = format_WilayahAdministrasi_0.readFeatures(json_WilayahAdministrasi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WilayahAdministrasi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WilayahAdministrasi_0.addFeatures(features_WilayahAdministrasi_0);
var lyr_WilayahAdministrasi_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_WilayahAdministrasi_0, 
                style: style_WilayahAdministrasi_0,
                popuplayertitle: "Wilayah Administrasi",
                interactive: true,
                title: '<img src="styles/legend/WilayahAdministrasi_0.png" /> Wilayah Administrasi'
            });
var format_Sungai_1 = new ol.format.GeoJSON();
var features_Sungai_1 = format_Sungai_1.readFeatures(json_Sungai_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_1.addFeatures(features_Sungai_1);
var lyr_Sungai_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sungai_1, 
                style: style_Sungai_1,
                popuplayertitle: "Sungai",
                interactive: true,
                title: '<img src="styles/legend/Sungai_1.png" /> Sungai'
            });
var format_Pemukiman_2 = new ol.format.GeoJSON();
var features_Pemukiman_2 = format_Pemukiman_2.readFeatures(json_Pemukiman_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemukiman_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemukiman_2.addFeatures(features_Pemukiman_2);
var lyr_Pemukiman_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pemukiman_2, 
                style: style_Pemukiman_2,
                popuplayertitle: "Pemukiman",
                interactive: true,
                title: '<img src="styles/legend/Pemukiman_2.png" /> Pemukiman'
            });
var format_AgriKebun_3 = new ol.format.GeoJSON();
var features_AgriKebun_3 = format_AgriKebun_3.readFeatures(json_AgriKebun_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgriKebun_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgriKebun_3.addFeatures(features_AgriKebun_3);
var lyr_AgriKebun_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AgriKebun_3, 
                style: style_AgriKebun_3,
                popuplayertitle: "Agri Kebun",
                interactive: true,
                title: '<img src="styles/legend/AgriKebun_3.png" /> Agri Kebun'
            });
var format_AgriLadang_4 = new ol.format.GeoJSON();
var features_AgriLadang_4 = format_AgriLadang_4.readFeatures(json_AgriLadang_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgriLadang_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgriLadang_4.addFeatures(features_AgriLadang_4);
var lyr_AgriLadang_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AgriLadang_4, 
                style: style_AgriLadang_4,
                popuplayertitle: "Agri Ladang",
                interactive: true,
                title: '<img src="styles/legend/AgriLadang_4.png" /> Agri Ladang'
            });
var format_AgriSawah_5 = new ol.format.GeoJSON();
var features_AgriSawah_5 = format_AgriSawah_5.readFeatures(json_AgriSawah_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AgriSawah_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AgriSawah_5.addFeatures(features_AgriSawah_5);
var lyr_AgriSawah_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AgriSawah_5, 
                style: style_AgriSawah_5,
                popuplayertitle: "Agri Sawah",
                interactive: true,
                title: '<img src="styles/legend/AgriSawah_5.png" /> Agri Sawah'
            });
var format_Danau_6 = new ol.format.GeoJSON();
var features_Danau_6 = format_Danau_6.readFeatures(json_Danau_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Danau_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Danau_6.addFeatures(features_Danau_6);
var lyr_Danau_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Danau_6, 
                style: style_Danau_6,
                popuplayertitle: "Danau",
                interactive: true,
                title: '<img src="styles/legend/Danau_6.png" /> Danau'
            });
var format_Rawa_7 = new ol.format.GeoJSON();
var features_Rawa_7 = format_Rawa_7.readFeatures(json_Rawa_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rawa_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rawa_7.addFeatures(features_Rawa_7);
var lyr_Rawa_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Rawa_7, 
                style: style_Rawa_7,
                popuplayertitle: "Rawa",
                interactive: true,
                title: '<img src="styles/legend/Rawa_7.png" /> Rawa'
            });
var format_Pemerintahan_8 = new ol.format.GeoJSON();
var features_Pemerintahan_8 = format_Pemerintahan_8.readFeatures(json_Pemerintahan_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pemerintahan_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pemerintahan_8.addFeatures(features_Pemerintahan_8);
var lyr_Pemerintahan_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pemerintahan_8, 
                style: style_Pemerintahan_8,
                popuplayertitle: "Pemerintahan",
                interactive: true,
                title: '<img src="styles/legend/Pemerintahan_8.png" /> Pemerintahan'
            });
var format_Puskesmas_9 = new ol.format.GeoJSON();
var features_Puskesmas_9 = format_Puskesmas_9.readFeatures(json_Puskesmas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puskesmas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puskesmas_9.addFeatures(features_Puskesmas_9);
var lyr_Puskesmas_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puskesmas_9, 
                style: style_Puskesmas_9,
                popuplayertitle: "Puskesmas",
                interactive: true,
                title: '<img src="styles/legend/Puskesmas_9.png" /> Puskesmas'
            });

lyr_WilayahAdministrasi_0.setVisible(true);lyr_Sungai_1.setVisible(true);lyr_Pemukiman_2.setVisible(true);lyr_AgriKebun_3.setVisible(true);lyr_AgriLadang_4.setVisible(true);lyr_AgriSawah_5.setVisible(true);lyr_Danau_6.setVisible(true);lyr_Rawa_7.setVisible(true);lyr_Pemerintahan_8.setVisible(true);lyr_Puskesmas_9.setVisible(true);
var layersList = [lyr_WilayahAdministrasi_0,lyr_Sungai_1,lyr_Pemukiman_2,lyr_AgriKebun_3,lyr_AgriLadang_4,lyr_AgriSawah_5,lyr_Danau_6,lyr_Rawa_7,lyr_Pemerintahan_8,lyr_Puskesmas_9];
lyr_WilayahAdministrasi_0.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Sungai_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPSNG': 'TIPSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'STATUS': 'STATUS', 'WMAX': 'WMAX', 'DBTMAX': 'DBTMAX', 'SLPRT': 'SLPRT', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_Pemukiman_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AgriKebun_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AgriLadang_4.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JNSLDG': 'JNSLDG', 'TNMLDG': 'TNMLDG', 'TIPLDG': 'TIPLDG', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AgriSawah_5.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Danau_6.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'OTODAN': 'OTODAN', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'VOLTAP': 'VOLTAP', 'DTA': 'DTA', 'SEDIMN': 'SEDIMN', 'VLCSDN': 'VLCSDN', 'QUAAR': 'QUAAR', 'CRH': 'CRH', 'KPTS': 'KPTS', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'LOKASI': 'LOKASI', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Rawa_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TPRAWA': 'TPRAWA', 'TPGNGN': 'TPGNGN', 'TPAIR': 'TPAIR', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Pemerintahan_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FGSGOV': 'FGSGOV', 'LUAS': 'LUAS', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_Puskesmas_9.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'LCODE': 'LCODE', 'SRS_ID': 'SRS_ID', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'KWKPKM_': 'KWKPKM_', 'KMPPKM_': 'KMPPKM_', 'JPLPKM_': 'JPLPKM_', 'PKMKODE_': 'PKMKODE_', 'PKMKAT_': 'PKMKAT_', 'PKMLMT_': 'PKMLMT_', });
lyr_WilayahAdministrasi_0.set('fieldImages', {'KDPPUM': '', 'NAMOBJ': '', 'REMARK': '', 'KDPBPS': '', 'FCODE': '', 'LUASWH': '', 'UUPP': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'KDEBPS': '', 'KDEPUM': '', 'KDCBPS': '', 'KDCPUM': '', 'KDBBPS': '', 'KDBPUM': '', 'WADMKD': '', 'WIADKD': '', 'WADMKC': '', 'WIADKC': '', 'WADMKK': '', 'WIADKK': '', 'WADMPR': '', 'WIADPR': '', 'TIPADM': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Sungai_1.set('fieldImages', {'NAMOBJ': '', 'TIPSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'STATUS': '', 'WMAX': '', 'DBTMAX': '', 'SLPRT': '', 'SHAPE_Leng': '', });
lyr_Pemukiman_2.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AgriKebun_3.set('fieldImages', {'NAMOBJ': '', 'JNSKBN': '', 'FCODE': '', 'PUDATE': '', 'AQDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AgriLadang_4.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'AQDATE': '', 'PUDATE': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'JNSLDG': '', 'TNMLDG': '', 'TIPLDG': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_AgriSawah_5.set('fieldImages', {'NAMOBJ': '', 'JNSSWH': '', 'FCODE': '', 'AQDATE': '', 'PUDATE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TNMSWH': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Danau_6.set('fieldImages', {'NAMOBJ': '', 'OTODAN': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'VOLTAP': '', 'DTA': '', 'SEDIMN': '', 'VLCSDN': '', 'QUAAR': '', 'CRH': '', 'KPTS': '', 'NAMWS': '', 'NAMDAS': '', 'LOKASI': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Rawa_7.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'REMARK': '', 'KODLCO': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'TPRAWA': '', 'TPGNGN': '', 'TPAIR': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Pemerintahan_8.set('fieldImages', {'NAMOBJ': '', 'FGSGOV': '', 'LUAS': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', });
lyr_Puskesmas_9.set('fieldImages', {'NAMOBJ': '', 'FCODE': '', 'LCODE': '', 'SRS_ID': '', 'REMARK': '', 'METADATA': '', 'KWKPKM_': '', 'KMPPKM_': '', 'JPLPKM_': '', 'PKMKODE_': '', 'PKMKAT_': '', 'PKMLMT_': '', });
lyr_WilayahAdministrasi_0.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'inline label - visible with data', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Sungai_1.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'TIPSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'STATUS': 'no label', 'WMAX': 'no label', 'DBTMAX': 'no label', 'SLPRT': 'no label', 'SHAPE_Leng': 'no label', });
lyr_Pemukiman_2.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AgriKebun_3.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AgriLadang_4.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JNSLDG': 'no label', 'TNMLDG': 'no label', 'TIPLDG': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AgriSawah_5.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Danau_6.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'OTODAN': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'VOLTAP': 'no label', 'DTA': 'no label', 'SEDIMN': 'no label', 'VLCSDN': 'no label', 'QUAAR': 'no label', 'CRH': 'no label', 'KPTS': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'LOKASI': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Rawa_7.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TPRAWA': 'no label', 'TPGNGN': 'no label', 'TPAIR': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Pemerintahan_8.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FGSGOV': 'no label', 'LUAS': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_Puskesmas_9.set('fieldLabels', {'NAMOBJ': 'inline label - visible with data', 'FCODE': 'no label', 'LCODE': 'no label', 'SRS_ID': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'KWKPKM_': 'no label', 'KMPPKM_': 'no label', 'JPLPKM_': 'no label', 'PKMKODE_': 'no label', 'PKMKAT_': 'no label', 'PKMLMT_': 'no label', });
lyr_Puskesmas_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});